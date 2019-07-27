# Contributing

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Formula Nano community. Here are a few guidelines that will help you along the way.

## Submitting a pull request

Nanocar-Builder is a community project, so pull requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

As with issues, please begin the title with [ComponentName].

When adding new features or modifying existing, please attempt to include tests to confirm the new behaviour.

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/formulanano/nanocar-builder-web/tags)).
At any given time, `master` represents the latest stable version and `develop` represents the latest development version of the library.
Patches or hotfix releases are prepared on an independent branch.

#### `master`

The `master` branch stores the official release history.
We will do our best to keep `master` in good shape and stable with tests passing at all times.

#### `develop`

We use `develop` branch as an integration branch for features.

### How to increase the chance of being accepted?

We will only accept a pull request for which all tests pass. Make sure the following is true:

- The branch is targeted at:
  - `develop` for ongoing development.
- The branch is not behind its target.
- If a feature is being added:
  - If the result was already achievable with the core library, explain why this
      feature needs to be added to the core.
  - It includes relevant tests.
  - If this is a common use case, considered adding an example to the documentation.
- If a bug is being fixed, test cases that fail without the fix are included.
- The code is formatted (run `npm run prettier`).
- The PR title follows the pattern `[Component] Imperative commit message`. (See: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/#imperative) for a great explanation)

## Getting started

Please create a new branch from an up to date `develop` branch on your fork. (Note, urgent hotfixes should be branched from the `master` rather than `develop`)

1. Fork the Nanocar-Builder repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/nanocar-builder-web.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.

```sh
git remote add upstream git@github.com:formulanano/nanocar-builder-web.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
yarn
```

### Building locally

To use the provided build scripts with yarn you have latest `npm` installed on your system and then just run `npm run build`.

### Coding style

Please follow the coding style of the project. Nanocar-Builder uses eslint, so if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command `npm run eslint`.

You can also run `npm run prettier` to reformat the code.

Finally, when you submit a pull request, they are run again by CI, but hopefully by then your code is already clean!
