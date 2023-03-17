# Instructions

Install Husky as a dev dependency

```sh
npm install husky --save-dev
```

To ensure that Husky is properly installed when `npm install` is run, then a prepare script is set up so that `husky install` is run

```sh
npm pkg set scripts.prepare="husky install"
```
