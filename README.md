# Git course

This repo is my practice for the course "git frome zero to hero" of codersx.

## What we will cover?

- Installation
- commits
- git log/ git show/ git diff
- working dir, staging area, git repository
- checkout, reset
- branching, merging
- git reset
- git revert
- .gitignore file
- github, bitbucket, gitlab
- git clone, git pull
- push a branch
- pull request
- code review
- resolve conflict with git rebase
- resolve conflict with merge

## Work with a team

- git checkout -b <branch_name>
- git push origin <branch_name>
- create a pull request on Github
- review code
  -- review code online (github)
  -- fetch branch into local machine to test offline
  -- approve the pull request
- merge to master

## Resolve conflicts

When will conflicts happen?

- Changing the same file + same line
- A deleted file X, B modified file X

How to resolve?

### Method 1:

- Using `git rebase`
- Resolve conflict
- Push again with -f

### Method 2:

- Merge updated master to feature branch
- Resolve conflict
- Commit and push
