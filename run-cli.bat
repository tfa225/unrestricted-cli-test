@echo off
echo Running @simonb97/server-win-cli...
npx -y @simonb97/server-win-cli
if %ERRORLEVEL% NEQ 0 (
  echo Error executing CLI command
  exit /b %ERRORLEVEL%
) else (
  echo Command executed successfully
)
pause