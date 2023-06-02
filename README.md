# What is ESLint and Prettier, and what do they do?

ESLint statically analyzes your code to help you detect formatting issues and find code inconsistencies.\
Prettier does not check your code quality, it just serves as a code formatter.

These both have similar objectives:

- Makes code more consistent in itself and across team members
- Detects problematic code patterns that could lead to potential bugs

# What is lint-staged, and what does it do?

With lint-staged, executing the command git commit automatically runs the linter against files staged for commit.\
Once you are done with the code, you can stage the modified files and run the linter before committing them.

# Installation instructions

Install eslint, prettier, husky and lint-staged as a dev dependency

```sh
npm install eslint prettier husky lint-staged --save-dev
```

Optionally install additional configs, types and plugins for eslint

```sh
npm install eslint-plugin-prettier eslint-plugin-import eslint-plugin-yml eslint-config-prettier eslint-config-airbnb-base @types/eslint @types/eslint-plugin-prettier @types/prettier eslint-plugin-jest eslint-plugin-jest-formatting --save-dev
```

To ensure that Husky is properly installed when `npm install` is run, then a prepare script is set up so that `husky install` is run

```sh
npm pkg set scripts.prepare="husky install"
```

After this script has been added, run

```sh
npm install
```

# Setting up eslint

Create an npm script to verify files using eslint

```sh
npm pkg set scripts.eslint:verify="eslint ."
```

Create an npm script to fix files using eslint

```sh
npm pkg set scripts.eslint:fix="eslint --cache --fix"
```

Create a .eslintrc.js file to configure eslint

```javascript
module.exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/recommended",
  ],
  plugins: ["prettier", "jest", "jest-formatting"],
  rules: {
    "max-len": "off",
    "no-underscore-dangle": 0,
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    camelcase: 0,
  },
  env: {
    jest: true,
  },
};
```

Create a .eslintignore file to ignore specific files/folders

```sh
# ignore artifacts:
node_modules
coverage
```

# Setting up prettier

Create an npm script to verify files using prettier

```sh
npm pkg set scripts.prettier:verify="prettier --check ."
```

Create an npm script to fix files using prettier

```sh
npm pkg set scripts.prettier:fix="prettier --write"
```

Create a .prettierrc file to configure prettier

```javascript
{
  "useTabs": false,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "all",
  "semi": true
}
```

Create a .prettierignore file to ignore specific files/folders

```sh
# ignore artifacts:
node_modules
coverage
```

# Setting up lint-staged

Create a lint-staged object in your package.json file to trigger eslint and prettier validations

```json
"lint-staged": {
  "*.js": "npm run eslint:fix",
  "*.{js,css,md,yml,json,code-snippets}": "npm run prettier:fix"
}
```

Create a husky pre-commit script to execute lint-staged on commit

```sh
npx husky add .husky/pre-commit "npx lint-staged --relative --verbose"
```
