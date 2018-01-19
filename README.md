# Canvas Kit React

This project provides Canvas-styled React components.

## Getting Started

1. Clone the respository and run `yarn`
2. Run `npm run bootstrap`
3. Run `npm run build`
4. Run `npm start` to start [Storybook](https://storybook.js.org/)
5. Visit [http://localhost:9001/](http://localhost:9001/)

## Creating a module

1. Run `npm run create-module`
2. Enter in a module name, description and author
3. (optional) Add any required dependencies on other modules
4. (optional) If you added any extra dependencies, run `lerna bootstrap`
5. Start Storybook `npm start`
6. Navigate to [http://localhost:9001/](http://localhost:9001/) and find your new module's story
7. Begin editing your new React component in `modules/canvas-kit-react-<NAME>/index.js`!

## Building modules

1. Lerna bootstrap `npm run bootstrap`
2. Lerna build `npm run build`

## Building kit

1. Run `npm run publish`

**Note:** This will execute `npm run build-storybook && npm run lerna-publish`. `lerna-publish` will run with the options `--exact`, `--skip-npm`, and `--conventional-commits`.

**Note:** The `lerna-publish` command will:

1. Run the equivalent of lerna updated to determine which packages need to be published.
2. If necessary, increment the version key in lerna.json.
3. Update the package.json of all updated packages to their new versions.
4. Update all dependencies of the updated packages with the new versions, specified with a caret (^).
5. Use Conventional Commits to [determine the version bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump) and [generate CHANGELOG](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli).
6. Create a new git commit and tag for the new version.

For more information on lerna publishing, please see the [lerna publish docs](https://github.com/lerna/lerna#publish).

## Code Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), with a few exceptions. Rules are enforced using [TSLint](https://palantir.github.io/tslint/) and code formatting is provided through [Prettier](prettier.io).

To lint using TSLint, use `npm run lint`. To format and lint your code (careful - this can rewrite files), use `npm run format`.

Code formatting will occur automatically before `git commit` for files staged using `git add`.

### Editors

Install the Prettier and TSLint plugins for your respective editors for quicker and easier formatting.

#### Visual Studio Code

Install [prettier-vscode](https://github.com/prettier/prettier-vscode) and [vscode-tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

Consider adding the following options:

* [Format on save](https://github.com/prettier/prettier-vscode#format-on-save)

#### Atom

Install [prettier-atom](https://github.com/prettier/prettier-atom) and [linter-tslint](https://github.com/AtomLinter/linter-tslint)

#### Emacs

Install [prettier-emacs](https://github.com/prettier/prettier-emacs) and [Flycheck](http://www.flycheck.org/)

#### Other Editors

Check [Prettier](https://prettier.io/docs/en/editors.html) and [TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) documentation for additional editor plugins.
