#!/bin/bash

npm install --depth=0 --quiet
echo
echo \> Listening on port $1
echo
npm run dev
