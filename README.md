# Setting up badges in your README file

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=bugs)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_yellow-belt-template&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=gotreasa_yellow-belt-template)

To help understand at a glance the health of a project along with making it easy to find the URLs for the tools you're using like SonarCloud and the pipeline, badging on your README file can be really useful.  Each tool provides autogenerated badges for you.  It's a case then of adding the markdown to the top of your README file.  You can see the examples above which is going overboard.

## Sonar

In your Sonar project you have an Information tab to the left of your page (Step by step guide in <https://docs.sonarcloud.io/appendices/project-information/>).  Click on that and that will give you badging options for different metrics:  

* Code Smells
* Maintainability Rating
* Security Rating
* Bugs
* Vulnerabilities
* Duplicated Lines (%)
* Reliability Rating
* Quality Gate Status
* Technical Debt
* Coverage
* Lines of Code

## Github Actions

For your Github Actions pipeline you can have badges for the workflows.  Follow <https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge> for the details.

## Travis

For your Travis builds you can see the badge at the top of the page, and click on it to get the Markdown.  For a guide follow <https://docs.travis-ci.com/user/status-images/>.
