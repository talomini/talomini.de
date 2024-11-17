#!/usr/bin/env bash

args=()

while test $# -gt 0; do
  case "$1" in
    -h|--help)
      echo "Usage: ..."
      echo ""
      echo "Options"
      echo "  -h|--help    Show help"
      ;;
    --preview)
      args+=("--config" "config.toml,config.preview.toml")
      shift
      ;;
    --draft)
      args+=("--buildDrafts")
      shift
      ;;
    *)
      echo "[error] Unknown option: $1" >&2
      exit 1
      ;;
  esac
done


npx netlify-cms-proxy-server & hugo serve "${args[@]}"; kill $!

