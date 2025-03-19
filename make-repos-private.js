// Script to change all repositories to private using GitHub API
const { execSync } = require('child_process');

try {
  console.log('Changing the current repository to private...');
  
  // GitHub CLI command to make the current repository private
  const output = execSync('gh repo edit --visibility private', {
    stdio: 'inherit'
  });
  
  console.log('Repository successfully changed to private');
  
  // List all repositories and make them private
  console.log('Fetching list of all repositories...');
  const repoList = execSync('gh repo list --json nameWithOwner --limit 100', {
    encoding: 'utf8'
  });
  
  const repos = JSON.parse(repoList);
  console.log(`Found ${repos.length} repositories. Making them private...`);
  
  repos.forEach(repo => {
    try {
      console.log(`Making ${repo.nameWithOwner} private...`);
      execSync(`gh repo edit ${repo.nameWithOwner} --visibility private`, {
        stdio: 'inherit'
      });
      console.log(`✓ ${repo.nameWithOwner} is now private`);
    } catch (repoError) {
      console.error(`× Failed to make ${repo.nameWithOwner} private: ${repoError.message}`);
    }
  });
  
  console.log('All repositories have been processed.');
} catch (error) {
  console.error('Error executing command:', error.message);
}