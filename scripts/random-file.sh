#!/bin/bash
FILENAME="file_$(tr -dc a-z0-9 </dev/urandom | head -c 8).txt"
echo "Hello World" > "$FILENAME"
echo "Created $FILENAME"
