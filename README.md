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

&nbsp;

## Update Gitignore

You can follow the instructions on the gitignore branch to setup a .gitignore file that excludes everything that it should.

&nbsp;

## Authentication

For Sonar scanning to work, you'll need to be able to authenticate with sonarcloud.io. Log into <https://sonarcloud.io/account/security> using your public Github account. Then generate a token and store it in your 1Password account.

&nbsp;

## Set up your Sonar project properties

You will need to create sonar-project.properties. In it you'll need to update the values to match your repository

```properties
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
**Note 2**: the sonar.projectKey must be unique across all of sonarcloud.io. I usually take the github organisation name and append the name of the repository to it.

&nbsp;

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
  
&nbsp;

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

&nbsp;

## Verify the Sonar Scanner runs on Push of code

Now that you made all of the changes completed commit it and push it.

&nbsp;

## Set up your New Code definition

In the sonar-project.properties you may have noticed that you had:

```properties
sonar.qualitygate.wait=false
```

Which is currently set to false.  You can enable the quality gate by setting it to true.  This will mean that if you're running the sonarcloud-scanner you will fail if the quality gate doesn't pass.

For sonar to evaluate the quality gate it needs to know what is new code.  You can set your new code definition by going to the Administration tab on your project page and opening New Code.  Then choose the option that you prefer.  A guide for this is available on <https://docs.sonarcloud.io/improving/new-code-definition/>.
