# Starting your own Cookiecutter

## Prerequisites

You will need to ensure that the cookiecutter tool is installed

```sh
brew install cookiecutter
```

## Cookiecutter layout

For setting up a cookiecutter repository it has 3 key things:

- cookiecutter.json -> This has all of the variables that you need to replace
- A folder with Jinja2 notation name e.g. {{cookiecutter.project_name}}
- hooks -> this contains your pre and post generation hooks that can either be shell or Python scripts.
  - pre_gen_project.py
  - post_gen_project.py
  - pre_gen_project.sh
  - post_gen_project.sh

## Why would you have pre or post generation hooks

The pre hook is quite useful to check if anything needs to be validated before the new repository folder is created and populated with all fo the files.  For the post hook all of the files are in place and it would be good to make sure things are set up such as:

- git repository locally
- git repository remotely
- installing the packages you need
- setting up any local and remote secrets
- configuring the sonar project
- enable your CI pipeline
- commit the code
- push the code up
- run tests to ensure that everything is set up correctly

## Cookiecutter variables

In your cookiecutter.json file you have the definition of all of the variables and give them default values.  Examples in the cookiecutter-demo branch.

```sh
{
    "project_name": "Simple Project"
}
```

Then you can reference to the variables in the cookiecutter.json file, the hooks, in folder/file names, and in any file in your new repository.  An example is `{{project_name}}`

## Existing Template

So you have an existing project.  You can decide to create a new repository with the cookiecutter files and folders and then move your code across.  This will mean you lose history.

Another approach which can keep the history is to create a `cookiecutter` folder, move everything to that which was in the repository aside for the `.git` folder.  Then once everything is in the `cookiecutter` folder, rename it to the cookiecutter variable that you want to use e.g. `{{cookiecutter.project_slug}}`.  

Then go ahead and create cookiecutter.json.  Set up your variables and update the files in your:

- README.md
- sonar-project.properties
- package.json
- package-lock.json
- CI files
- anything else that you can think of

Test out that running the cookiecutter command and ensure that everything is updated correctly.

Then after all of the files are looking correct, move on to set up your pre and post hooks.  You should have:

- Github set up
- Code pushed up
- Pre-commit, commit-msg and pre-push git hooks set up and working correctly
- Your pipeline should be all set up with security testing (maybe Snyk) and static Code Analysis (possibly SonarCloud) all correctly running.

## New repository

For a new repository, you can start off by setting up all of the files and folders that you need and then follow the instructions for an existing project starting off with the cookiecutter.json step.
