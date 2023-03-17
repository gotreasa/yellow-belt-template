# Instructions

Note: prerequisite is husky for making use of commitlint

Install Commitlint

```sh
npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

Configure Commitlint

```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

Test out Commitlint by trying out a bad commit message

```sh
git add .
git commit -m "Bad message"
```

You should get an error message.  Let's see it work for good commit message.

```sh
git add .
git commit -m "chore: setup commitlint"
```
