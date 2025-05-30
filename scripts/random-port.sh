#!/bin/bash
# Generate a random port number (1024-65535)
echo $(( RANDOM % 64512 + 1024 ))
