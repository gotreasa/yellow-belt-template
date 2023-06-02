# Setup Sonar

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=bugs)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)

## Install

Install Sonar library

```sh
npm install sonarqube-scanner --save-dev
```

## Update Gitignore

You will need to update your .gitignore file to include ignore files for Sonar - <https://www.toptal.com/developers/gitignore>. It should include NodeJs, SonarQube, and your operating system.

## Authentication

For Sonar scanning to work, you'll need to be able to authenticate with sonarcloud.io. Log into <https://sonarcloud.io/account/security> using your public Github account. Then generate a token and store it in your 1Password account.

## Set up your Sonar project properties

You will need to create sonar-project.properties. In it you'll need to update the values to match your repository

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

- sonar.links.scm
- sonar.organization
- sonar.projectKey

**Note 1**: the sonar.organization should be the value you find in <https://sonarcloud.io/account/organizations>.  
**Note 2**: the sonar.projectKey must be unique across all of sonarcloud.io. I usually take the organisation name and append the name of the repository to it.

## Test the configuration works

To test out the Sonar configuration we need to do three things:

1. Run the jest tests so that the coverage is generated

```sh
npm test
```

2. Set up the SONAR_TOKEN with the token you generated

```sh
export SONAR_TOKEN=#Enter the token you generated
```

3. Run the Sonar Scanner

```sh
npx sonar-scanner
```

When it has finished running you should see something like:

```sh
INFO: ANALYSIS SUCCESSFUL, you can find the results at: https://sonarcloud.io/dashboard?id=gotreasa_yellow-belt-template
```

You should be able to open the link and verify that you have 100% coverage.

## Integrate the Sonar Scanner into the pre-push hook

You will need to have the SONAR_TOKEN set up so that it always works without the need to set it up manually each time. We could put it in the pre-push file but it would be a security exposure. Instead it should be stored in the .env file, and loaded from there. So let's set up the .env and .env.sample.

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

You can do this by running:

```sh
npx husky add .husky/pre-push 'npx env-cmd sonar-scanner'
```

## Verify the Sonar Scanner runs on Push of code

Now that you made all of the changes completed commit it and push it.

## Integrate the Sonar Scanner into Travis CI

1. Enable the GitHub repository in Travis via your user profile
2. Add the SONAR_TOKEN as an environment variable in Travis
3. Create a travis.yml file with a stage for sonar-scanner

```yaml
os: linux
language: node_js
dist: focal
install:
  - npm i
cache:
  directories:
    - '~/.npm'
    - '~/.cache'
  npm: true
addons:
  sonarcloud: true
stages:
  - name: Unit test & sonar-scanner
jobs:
  include:
    - stage: Unit test & sonar-scanner
      script:
        - npm test
        - sonar-scanner -D sonar.login=$SONAR_TOKEN
      name: Unit test & sonar-scanner
      env: Unit test & sonar-scanner
```

4. Commit and push this file to your remote GitHub repository
