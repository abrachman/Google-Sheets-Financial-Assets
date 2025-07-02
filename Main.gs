// Function to process configurations based on destination sheet
function processConfigs(destinationSheetName) {
  const today = new Date();
  
  // Check if we should process based on sheet type and current date
  if (destinationSheetName === "Daily Log") {
    if (!shouldProcessDailyLog(today)) {
      return; // Exit early if not a valid day for Daily Log
    }
  } else if (destinationSheetName === "Monthly") {
    if (today.getDate() !== 1) {
      return; // Exit early if not the first day of the month
    }
  }
  
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const timestamp = getTimestampForSheet(destinationSheetName, today);

  // Filter configurations for the specified destination sheet
  const relevantConfigs = LOG_CONFIGS.filter(config => 
    config.destinationSheet === destinationSheetName
  );

  if (relevantConfigs.length === 0) return;
  
  // Get the destination sheet
  const destSheet = spreadsheet.getSheetByName(destinationSheetName);
  
  // Determine which column to check for the next empty row
  const dateColumn = DEFAULT_DESTINATION_COLUMNS[destinationSheetName];
  const dateColumnNumber = columnToNumber(dateColumn);
  
  // Find the last empty row in the specified column
  const newRow = getLastEmptyRowInColumn(destSheet, dateColumnNumber);
  
  // Process each configuration
  relevantConfigs.forEach(config => {
    const sourceSheet = spreadsheet.getSheetByName(config.sourceSheet);
    const sourceRange = sourceSheet.getRange(config.sourceRange);
    
    // Calculate value based on operation
    let value;
    if (config.operation === "sum") {
      const values = sourceRange.getValues().flat();
      value = values.reduce((sum, current) => sum + (current || 0), 0);
    } else {
      value = sourceRange.getValue();
    }
        
    // Convert column letter to number and write value
    const destCol = columnToNumber(config.destinationColumn);
    destSheet.getRange(newRow, destCol).setValue(value).setNumberFormat('$#,###.##');
    
    // Write timestamp in the specified date column
    destSheet.getRange(newRow, dateColumnNumber).setValue(timestamp);
  });
}

// Function to check if should process Daily Log (runs Tue-Sat, uses previous day's date)
function shouldProcessDailyLog(currentDate) {
  const day = currentDate.getDay();
  return day !== 0 && day !== 1; // 0 is Sunday, 1 is Monday (so Tue-Sat)
}

// Helper function to accept the date
function getTimestampForSheet(destinationSheetName, currentDate = new Date()) {
  const timestamp = new Date(currentDate);
  
  if (destinationSheetName === "Daily Log") {
    // Backdate to previous day since Google Finance updates late
    timestamp.setDate(timestamp.getDate() - 1);
  }
  
  return timestamp;
}

// Helper function to convert column letter to number
function columnToNumber(column) {
  let result = 0;
  for (let i = 0; i < column.length; i++) {
    result *= 26;
    result += column.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  }
  return result;
}

// Find the first empty row in a specific column
function getLastEmptyRowInColumn(sheet, column) {
  const data = sheet.getRange(1, column, sheet.getLastRow()).getValues(); // Get column data
  for (let i = 0; i < data.length; i++) {
    if (!data[i][0]) { // Check for an empty cell
      return i + 1; // Return the row number (1-based index)
    }
  }
  return data.length + 1; // If no empty rows, return the next available row
}

function logDailyValues() {
  processConfigs("Daily Log");
}

function logMonthlyValues() {
  processConfigs("Monthly");
}
