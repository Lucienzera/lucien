#!/bin/bash
# Generate a random hex color
printf "#%06x\n" $(( RANDOM * RANDOM % 16777216 ))
