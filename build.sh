#!/bin/bash
set -e

docker build --tag candidate_browser:latest .

docker rm -f candidate_browser 2>/dev/null || true

docker run \
  --name candidate_browser \
  --publish 3000:3000 \
  candidate_browser:latest

