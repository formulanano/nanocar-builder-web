# Contributing

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Formula Nano community. Here are a few guidelines that will help you along the way.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/formulanano/nanocar-builder-web/commits/master))

```
docs(changelog): update changelog to beta.5
```

```
style(App): fix typo
```

```
feat: implement orbit axes
```

```
fix(release): need to depend on latest reactjs and threejs

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: webpack, .eslintrc, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **chore**: Updating files that do not effect production code
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

Scope can be any specifying place of the commit change.
For example; `.eslintrc`, `Viewport`, `commons`, `src`, `App` etc.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).

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
- The code is formating by `git commit`, or run `yarn run prettier`.
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

To use the provided build scripts with yarn make sure you have the latest `yarn` installed on your system and then just run `yarn build`.

### Coding style

Please follow the coding style of the project. Nanocar-Builder uses eslint, so if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command `yarn run eslint`.

You can also run `yarn run prettier` to reformat the code.

Finally, when you submit a pull request, they are run again by CI, but hopefully by then your code is already clean!
