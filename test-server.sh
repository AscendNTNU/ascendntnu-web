#!/usr/bin/env bash
set -eo pipefail; [[ $TRACE ]] && set -x

node server.js & SERVER_PID=$!
sleep 1

# Run server tests here ...

kill "$SERVER_PID"
