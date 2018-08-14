# Canvas Kit React

This project provides Canvas-styled React components.

## Getting Started

1.  Clone the respository and run `yarn`
2.  Run `yarn build`
3.  Run `yarn start` to start [Storybook](https://storybook.js.org/)
4.  Visit [http://localhost:9001/](http://localhost:9001/)

## Creating a module

1.  Run `yarn create-module`
2.  Enter in a module name, description and author
3.  (optional) Add any required dependencies on other modules
4.  (optional) If you added any extra dependencies, run `lerna bootstrap`
5.  Start Storybook `yarn start`
6.  Navigate to [http://localhost:9001/](http://localhost:9001/) and find your new module's story
7.  Begin editing your new React component in `modules/canvas-kit-react-<NAME>/index.js`!

## Building modules

**`yarn build`**

This will build all modules' CSS and JS.

## Code Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), with
a few exceptions. Rules are enforced using [TSLint](https://palantir.github.io/tslint/) and code
formatting is provided through [Prettier](prettier.io).

To lint using TSLint, use `yarn lint`. To format and lint your code (careful - this can rewrite
files), use `yarn format`.

Code formatting will occur automatically before `git commit` for files staged using `git add`.

### Editors

Install the Prettier and TSLint plugins for your respective editors for quicker and easier
formatting.

#### Visual Studio Code

Install [prettier-vscode](https://github.com/prettier/prettier-vscode) and
[vscode-tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

Consider adding the following options:

* [Format on save](https://github.com/prettier/prettier-vscode#format-on-save)

#### Atom

Install [prettier-atom](https://github.com/prettier/prettier-atom) and
[linter-tslint](https://github.com/AtomLinter/linter-tslint)

#### Emacs

Install [prettier-emacs](https://github.com/prettier/prettier-emacs) and
[Flycheck](http://www.flycheck.org/)

#### Other Editors

Check [Prettier](https://prettier.io/docs/en/editors.html) and
[TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) documentation for additional
editor plugins.
