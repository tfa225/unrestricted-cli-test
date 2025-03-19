const { spawn } = require('child_process');
const config = require('./config.json');

console.log('Starting CLI test...');
console.log('Config:', JSON.stringify(config.config['unrestricted-cli'], null, 2));

// Extract command and arguments from config
const { command, args } = config.config['unrestricted-cli'];

// Function to execute the CLI command
function executeCliCommand() {
  console.log(`Executing: ${command} ${args.join(' ')}`);
  
  const process = spawn(command, args, { 
    stdio: 'inherit',
    shell: true
  });
  
  process.on('error', (error) => {
    console.error(`Error executing command: ${error.message}`);
  });
  
  process.on('close', (code) => {
    console.log(`Command execution completed with code ${code}`);
  });
}

// Run the command
executeCliCommand();
