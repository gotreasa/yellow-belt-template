# Setup Sonar

## Install

Install Sonar library

```sh
npm install sonarqube-scanner --save-dev
```

## Update Gitignore

You will need to update your .gitignore file to include ignore files for Sonar - <https://www.toptal.com/developers/gitignore>.  It should include NodeJs, SonarQube, and your operating system.

## Authentication

For Sonar scanning to work, you'll need to be able to authenticate with sonarcloud.io.  Log into <https://sonarcloud.io/account/security> using your public Github account.  Then generate a token and store it in your 1Password account.

## Set up your Sonar project properties

You will need to create sonar-project.properties.  In it you'll need to update the values to match your repository

```sonar
sonar.host.url=https://sonarcloud.io
sonar.javascript.coveragePlugin=lcov
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.links.scm=https://github.ibm.com/xpfarm/yellow-belt-template
sonar.organization=gotreasa
sonar.projectKey=gotreasa_yellow-belt-template
sonar.sourceEncoding=UTF-8
sonar.sources=src
sonar.tests=test
sonar.qualitygate.wait=false
```

Update the values for:

* sonar.links.scm
* sonar.organization
* sonar.projectKey

**Note 1**: the sonar.organization should be the value you find in <https://sonarcloud.io/account/organizations>.
**Note 2**: the sonar.projectKey must be unique across all of sonarcloud.io.  I usually take the organisation name and append the name of the repository to it.

## Test the configuration works

To test out the Sonar configuration we need to do three things:

1. Run the jest tests so that the coverage is generated

```sh
npm test
```

1. Set up the SONAR_TOKEN with the token you generated

```sh
export SONAR_TOKEN=#Enter the token you generated
```

1. Run the Sonar Scanner

```sh
npx sonar-scanner
```

When it has finished running you should see something like:

```sh
INFO: ANALYSIS SUCCESSFUL, you can find the results at: https://sonarcloud.io/dashboard?id=gotreasa_yellow-belt-template
```

You should be able to open the link and verify that you have 100% coverage.

## Integrate the Sonar Scanner into the pre-push hook

You will need to have the SONAR_TOKEN set up so that it always works without the need to set it up manually each time.  We could put it in the pre-push file but it would be a security exposure.  Instead it should be stored in the .env file, and loaded from there.  So let's set up the .env and .env.sample.

Create the .env.sample with:

```sh
SONAR_TOKEN=
```

Create the .env with:

```sh
export SONAR_TOKEN=#Enter the token you generated
```

To be able to automatically load the SONAR_TOKEN we will use env-cmd library

```sh
npm install env-cmd --save-dev
```

Now let's update the pre-push hook and add the following line after npm test:

```sh
npx env-cmd sonar-scanner
```
