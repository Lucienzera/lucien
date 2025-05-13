#!/bin/bash
START_DATE="2025-04-18" # Friday, 18 April 2025
# TODAY="2025-05-30"
TODAY_DATE=$(date +%Y-%m-%d)


echo "START DATE --- $START_DATE"
echo "TODAY DATE --- $TODAY"
# Convert dates to seconds since epoch
start_sec=$(date -j -f "%Y-%m-%d" "$START_DATE" +%s)
today_sec=$(date -j -f "%Y-%m-%d" "$TODAY" +%s)

# Find the next cutoff date
next_cutoff_sec=$start_sec

# Continue loop until next cutoff in seconds is greater than today date in seconds
while [ "$next_cutoff_sec" -lt "$today_sec" ]; do
  next_cutoff_sec=$((next_cutoff_sec + 14*24*60*60))
  date_test=$(date -j -r "$next_cutoff_sec" +%Y-%m-%d)
echo "Checking next cutoff date --- $date_test"
done

if [ "$today_sec" = "$next_cutoff_sec" ]; then
  echo "should_cutoff=true"
  echo "✅ Today is a cutoff date. Proceeding with build."
else
  echo "should_cutoff=false"
  next_cutoff=$(date -j -r "$next_cutoff_sec" +%Y-%m-%d)

  echo "🛑 Skipping build. Today is not a cutoff date. Next is: $next_cutoff"
fi
exit 0

# next_cutoff_sec start with initial start_sec
# while loop to find the next cutoff date
#   add 14 days to next_cutoff_sec
#   check if next_cutoff_sec is less than today_sec
#   if so, repeat
#   if not, exit loop
# convert next_cutoff_sec to date format
# check if today is equal to next_cutoff
# if so, set should_cutoff to true
# if not, set should_cutoff to false
# print should_cutoff
# exit with status 0

# The script checks if today is a cutoff date based on a 14-day interval starting from a given date.
# It calculates the next cutoff date and compares it with today's date.
# If today is a cutoff date, it sets should_cutoff to true; otherwise, it sets it to false.
# The script uses the date command to perform date calculations and formatting.
# The script is designed to be run in a Unix-like environment with bash and the date command available.
# The script is useful for automating tasks that need to be performed on specific cutoff dates.
# The script is designed to be run in a Unix-like environment with bash and the date command available.
# The script is useful for automating tasks that need to be performed on specific cutoff dates.   
