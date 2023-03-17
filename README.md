# Instructions

## Setting up commitizen

*Note*: Husky is a prerequisite to have commitizen set up with a Git hook

```sh
npm install husky --save-dev
npm pkg set scripts.prepare="husky install"
```

Setting up commitizen

```sh
npm i commitizen --save-dev 
npx commitizen init cz-conventional-changelog --save-dev --save-exact
npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'
```

To test run:

```sh
git add .
git commit
```