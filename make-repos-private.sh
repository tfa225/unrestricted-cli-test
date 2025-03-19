#!/bin/bash
# Script to change all repositories to private

echo "Changing all repositories to private..."

# Make the current repository private
echo "Making current repository private..."
gh repo edit --visibility private

# Get list of all repositories
echo "Fetching all repositories..."
REPOS=$(gh repo list --json nameWithOwner --limit 100 | jq -r ".[].nameWithOwner")

# Loop through each repository and make it private
for REPO in $REPOS; do
  echo "Making $REPO private..."
  gh repo edit "$REPO" --visibility private
  if [ $? -eq 0 ]; then
    echo "✓ $REPO is now private"
  else
    echo "× Failed to make $REPO private"
  fi
done

echo "All repositories have been processed."