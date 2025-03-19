# Unrestricted CLI Test

This repository is set up to test the `@simonb97/server-win-cli` NPM package.

## Configuration

The configuration is stored in `config.json` and includes the following settings:

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

To test the CLI command, you can either:

1. Run the included script:
   ```
   node index.js
   ```

2. Use npm start (which executes the same command):
   ```
   npm start
   ```

## What this does

This repository demonstrates running the `@simonb97/server-win-cli` package using NPX. The index.js file will:

1. Load the configuration from config.json
2. Execute the NPX command with the appropriate arguments
3. Display the output from the command execution

## Notes

- This is intended for Windows environments, as indicated by the package name
- The -y flag automatically accepts any prompts during installation
