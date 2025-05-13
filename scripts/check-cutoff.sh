#!/bin/bash
# This script checks if today falls on a cutoff date
# Cutoff dates occur every 14 days, starting from a reference date (2025-05-16 - Friday)
# We loop the calculation to get the next cutoff date and check if it's equal or after today
# If today is a cutoff date, it sets should_cutoff to true; otherwise, it sets it to false.

# Reference start date for cutoff (must be a Friday)
START_DATE_FRIDAY="2025-05-16"  

# Get today's date in YYYY-MM-DD format
TODAY_DATE=$(date +%Y-%m-%d)

# Convert start date and today's date to seconds calculation
start_date_in_seconds=$(date -d "$START_DATE_FRIDAY" +%s)
today_date_in_seconds=$(date -d "$TODAY_DATE" +%s)

# Initialize next_cutoff_in_sec with the start date
next_cutoff_in_sec=$start_date_in_seconds

# Loop: Add 14 days (in seconds) until next_cutoff_in_sec is after or equal to today
while [ "$next_cutoff_in_sec" -lt "$today_date_in_seconds" ]; do
  next_cutoff_in_sec=$((next_cutoff_in_sec + 14*24*60*60))
done

# Check if today is the cutoff date
if [ "$today_date_in_seconds" = "$next_cutoff_in_sec" ]; then
  # Set output for GitHub Actions and print message
  echo "should_cutoff=true" >> "$GITHUB_OUTPUT"
  echo "✅ Today is a cutoff date. Proceeding with build."
else
  next_cutoff=$(date -d "@$next_cutoff_in_sec" +%Y-%m-%d)

  # Set output for GitHub Actions and print message
  echo "should_cutoff=false" >> "$GITHUB_OUTPUT"
  echo "🛑 Skipping build. Today is not a cutoff date. Next is: $next_cutoff"
fi

exit 0
