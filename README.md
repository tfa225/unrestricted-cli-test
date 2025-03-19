# Unrestricted CLI Test

This repository is set up to test the `@simonb97/server-win-cli` NPM package directly using NPX.

## Configuration

The configuration is stored in `config.json` with the exact structure:

```json
{
  "unrestricted-cli": {
    "command": "npx",
    "args": [
      "-y",
      "@simonb97/server-win-cli"
    ]
  }
}
```

## Usage

You can run the CLI in multiple ways:

1. **Direct execution:**
   ```
   npm start
   ```

2. **Using the config-based approach:**
   ```
   node index.js
   ```

3. **Using the simplified script:**
   ```
   node run-cli.js
   ```

## Testing Steps

1. Clone this repository
2. Run any of the commands above to execute the CLI
3. The script will automatically install and run `@simonb97/server-win-cli`

## Repository Structure

- `config.json` - Contains the CLI configuration
- `index.js` - Reads the config file and executes the CLI command
- `run-cli.js` - Directly executes the CLI command without config
- `package.json` - Contains npm scripts to run the CLI

## Notes

- This package is designed for Windows environments
- The `-y` flag automatically accepts any prompts during installation
