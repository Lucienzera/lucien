#!/bin/bash
# Generate a random password
openssl rand -base64 16 | tr -d "=+/" | cut -c1-15
