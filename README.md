# Instructions

## Prompt version of CommitLint

To install the packages for commitlint prompt version:

```sh
npm install --save-dev @commitlint/{cli,config-conventional,prompt-cli}
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

Instead of setting up a husky hook to run this command, we'll make use of the npm hook

```sh
npm pkg set scripts.commit="commit"
```
