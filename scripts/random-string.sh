#!/bin/bash
tr -dc A-Za-z0-9 </dev/urandom | head -c 12 ; echo
