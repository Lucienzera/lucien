#!/bin/bash
START_DATE=$(date -d "-10 years" +%s)
END_DATE=$(date +%s)
RANDOM_DATE=$(date -d "@$((RANDOM % (END_DATE - START_DATE) + START_DATE))" +"%Y-%m-%d")
echo "Random date in the past 10 years: $RANDOM_DATE"
