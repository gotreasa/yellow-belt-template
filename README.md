# Instructions

## Setting up commitizen

```sh
npm install husky --save-dev
npm pkg set scripts.prepare="husky install"
npm i commitizen --save-dev
npx commitizen init cz-conventional-changelog --save-dev --save-exact
npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'
```