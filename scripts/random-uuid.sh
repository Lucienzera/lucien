#!/bin/bash
# Generate a random UUID
if command -v uuidgen &> /dev/null; then
    uuidgen | tr '[:upper:]' '[:lower:]'
else
    echo "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" | sed 's/[xy]/\$(printf "%x" \$((RANDOM%16)))/g'
fi
