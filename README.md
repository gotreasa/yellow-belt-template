# Instructions

## Setting up Snyk

Install Snyk by running:

```sh
npm install snyk --save-dev
```

### Authentication

There are two ways to authenticate for Snyk.

Method 1:  

Authenticate with the CLI command, following the steps through.
```sh
npx snyk auth

## To test this is working run
npx snyk test
```

Method 2:  

Set up an environment variable SNYK_TOKEN and export it so that snyk test can use it.

```sh
export SNYK_TOKEN=#Replace with your Auth toekn from https://app.snyk.io/account

## To test this is working run
npx snyk test
```

### Checking the repository dependencies

To check the production dependencies run:

```sh
npx snyk test
```

To include the development dependencies run:

```sh
npx snyk test --dev
```

This will produce an output in the terminal.

### Monitoring the dependencies

There is the ability to monitor the dependencies so that you have a page with the health of the repository.  To check the production dependencies run:

```sh
npx snyk monitor
```

To include the development dependencies run:

```sh
npx snyk monitor --dev
```

### Troubleshooting

When running:

```sh
npx snyk test --dev
```

Getting the following error

```sh
Dependency <Package Name> was not found in package-lock.json. Your package.json and package-lock.json are probably out of sync. Please run "npm install" and try again.
```

A solution is to revert the package-lock to an older file format, by running:

```sh
npm install --lockfile-version=2 
```
