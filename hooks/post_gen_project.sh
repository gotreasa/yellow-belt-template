#!/bin/bash

echo "🏁  Starting the cookie cutter script"
gh repo create {{cookiecutter.github_url}}/{{cookiecutter.github_org}}/{{cookiecutter.repo_name}} --public
git init
git remote add origin git@{{cookiecutter.github_url}}:{{cookiecutter.github_org}}/{{cookiecutter.repo_name}}.git

echo "ℹ️  Starting installing the NPM packages"
npm install

echo "🚀  Completed the cookie cutter script"
