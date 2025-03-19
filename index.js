const { spawn } = require('child_process');
const fs = require('fs');

// Read the config file
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

console.log('Starting CLI execution...');
console.log('Config:', JSON.stringify(config, null, 2));

// Execute the CLI command directly
const command = config['unrestricted-cli'].command;
const args = config['unrestricted-cli'].args;

console.log(`Executing: ${command} ${args.join(' ')}`);

// Execute the command
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