// Date columns for each destination sheet to check for the next emtpy row
// Allows to have some of the columns prefilled out, such as the contribution columns or the mortgage column
const DEFAULT_DESTINATION_COLUMNS = {
  "Monthly": "A",
  "Daily Log": "A"
};

// Configuration object to define source and destination mappings
const LOG_CONFIGS = [
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "D9",
    destinationSheet: "Daily Log",
    destinationColumn: "B",
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G18:G22",
    destinationSheet: "Monthly",
    destinationColumn: "E", // Roth IRA
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G25",
    destinationSheet: "Monthly",
    destinationColumn: "G", // Traditional IRA
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G23:G24",
    destinationSheet: "Monthly",
    destinationColumn: "I", // Simple IRA
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G26",
    destinationSheet: "Monthly", // 457
    destinationColumn: "N",
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G29",
    destinationSheet: "Monthly",
    destinationColumn: "P", // 401k
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G14:G17",
    destinationSheet: "Monthly",
    destinationColumn: "S", // Brokerage
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G27",
    destinationSheet: "Monthly",
    destinationColumn: "U", // 529
    operation: "sum"
  },
  {
    sourceSheet: "Portfolio Tracker",
    sourceRange: "G28",
    destinationSheet: "Monthly",
    destinationColumn: "W", // HSA
    operation: "sum"
  }
];
