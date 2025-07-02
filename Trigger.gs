// Function to create triggers
function createTriggers() {
  // Delete any existing triggers
  var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));
  
  // Create daily triggers (8am) (CST - set in the settings)
  const dailyTriggerTimes = [8];
  dailyTriggerTimes.forEach(hour => {
    ScriptApp.newTrigger('logDailyValues')
      .timeBased()
      .atHour(hour)
      .everyDays(1)
      .inTimezone(Session.getScriptTimeZone())
      .create();
  });
  
  // Create monthly trigger (8am)
  ScriptApp.newTrigger('logMonthlyValues')
    .timeBased()
    .atHour(8)
    .everyDays(1)
    .inTimezone(Session.getScriptTimeZone())
    .create();
  
  Logger.log("All triggers have been created");
}
