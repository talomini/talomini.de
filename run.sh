#!/usr/bin/env bash

npx netlify-cms-proxy-server & hugo serve; kill $!

