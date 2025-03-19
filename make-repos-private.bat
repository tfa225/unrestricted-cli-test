@echo off
echo Changing all repositories to private...

REM Make the current repository private
echo Making current repository private...
gh repo edit --visibility private

REM Get list of all repositories and save to a temp file
echo Fetching all repositories...
gh repo list --json nameWithOwner --limit 100 > repos.json

REM Process the JSON file with the node script
node -e "const fs = require('fs'); const repos = JSON.parse(fs.readFileSync('repos.json', 'utf8')); repos.forEach(repo => { console.log(`Processing ${repo.nameWithOwner}...`); try { require('child_process').execSync(`gh repo edit ${repo.nameWithOwner} --visibility private`, {stdio: 'inherit'}); console.log(`✓ ${repo.nameWithOwner} is now private`); } catch(e) { console.error(`× Failed to make ${repo.nameWithOwner} private`); } });"

REM Clean up
del repos.json

echo All repositories have been processed.
pause