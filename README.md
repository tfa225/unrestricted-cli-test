# Unrestricted CLI Test

This repository is set up to test the `@simonb97/server-win-cli` NPM package directly using NPX, as well as to provide GitHub repository management utilities.

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

## Usage - Testing the CLI

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

4. **Using the Windows batch file:**
   ```
   run-cli.bat
   ```

## GitHub Repository Management

This repository also includes scripts to change all your GitHub repositories to private.

### Make All Repositories Private

Choose the appropriate script based on your operating system:

1. **Using Node.js:**
   ```
   node make-repos-private.js
   ```

2. **Using Bash (Linux/macOS):**
   ```
   chmod +x make-repos-private.sh
   ./make-repos-private.sh
   ```

3. **Using Windows Batch:**
   ```
   make-repos-private.bat
   ```

### Prerequisites for GitHub Scripts

These scripts require the GitHub CLI to be installed and authenticated:

1. **Install GitHub CLI:**
   - On Windows: `winget install --id GitHub.cli`
   - On macOS: `brew install gh`
   - On Linux: See [GitHub CLI Installation](https://github.com/cli/cli#installation)

2. **Authenticate:**
   ```
   gh auth login
   ```

## Repository Structure

- `config.json` - Contains the CLI configuration
- `index.js` - Reads the config file and executes the CLI command
- `run-cli.js` - Directly executes the CLI command without config
- `run-cli.bat` - Windows batch file to execute the CLI command
- `make-repos-private.*` - Scripts to change repositories to private
- `package.json` - Contains npm scripts to run the CLI

## Notes

- This package is designed for Windows environments
- The `-y` flag automatically accepts any prompts during installation
