Financial Assets Tracker
Overview
This Google Apps Script is designed to automatically record values from financial assets on set schedules. The script tracks asset performance by capturing both daily and monthly snapshots of financial data.
Features

Daily Recording: Automatically captures daily values of specified financial assets
Monthly Recording: Records monthly summaries and values for longer-term tracking
Scheduled Execution: Runs on predetermined schedules to ensure consistent data collection
Google Sheets Integration: Seamlessly works with Google Sheets for data storage and visualization

How It Works
The script connects to financial data sources and records asset values directly into your Google Sheets spreadsheet. It maintains separate tracking for:

Daily asset values for short-term analysis
Monthly asset values for trend analysis and reporting

Setup

Open your Google Sheets document
Go to Extensions → Apps Script
Copy and paste the provided code
Configure your financial assets and data sources as needed (Changes to the Config file will be necessary)
Set up time-driven triggers for automated execution

Usage
Once configured, the script will automatically:

Record daily financial asset values at specified times
Capture monthly summaries on schedule
Update your spreadsheet with the latest data

Requirements

Google Sheets
Google Apps Script access
Valid financial data sources (configured within the script with Google Finance)

Note
This script is designed specifically for use with Google Apps Script and Google Sheets. It requires proper configuration of data sources and scheduling triggers to function correctly.
