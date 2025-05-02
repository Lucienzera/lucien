#!/bin/bash
START_DATE="2025-04-18"
TODAY=$(date +%Y-%m-%d)

# Convert dates to seconds since epoch
start_sec=$(date -d "$START_DATE" +%s)
today_sec=$(date -d "$TODAY" +%s)

# Find the next cutoff date
next_cutoff_sec=$start_sec
while [ "$next_cutoff_sec" -lt "$today_sec" ]; do
  next_cutoff_sec=$((next_cutoff_sec + 14*24*60*60))
done

next_cutoff=$(date -d "@$next_cutoff_sec" +%Y-%m-%d)

if [ "$TODAY" = "$next_cutoff" ]; then
  echo "should_cutoff=true" >> "$GITHUB_OUTPUT"
  echo "✅ Today is a cutoff date. Proceeding with build."
else
  echo "should_cutoff=false" >> "$GITHUB_OUTPUT"
  echo "🛑 Skipping build. Today is not a cutoff date. Next is: $next_cutoff"
fi
exit 0
