// Simple script to directly execute the CLI command
const { execSync } = require('child_process');

try {
  console.log('Executing: npx -y @simonb97/server-win-cli');
  
  // Execute the command synchronously and output to console
  const output = execSync('npx -y @simonb97/server-win-cli', {
    stdio: 'inherit'
  });
  
  console.log('Command executed successfully');
} catch (error) {
  console.error('Error executing command:', error.message);
}