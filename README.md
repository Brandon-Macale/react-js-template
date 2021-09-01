# Getting Started
### Install dependencies: <br />
npm i

### Usage:
show linting errors to console: npm run lint <br />
fix linting errors: npm run lint:fix <br />

### If pre-commit on husky not working run these commands in order
###### NPM
npm uninstall husky <br />
npm install -D husky@4
###### try running test commit here to see if pre-commit works then update to latest version with:
npm install -D husky

Solution from: https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit
