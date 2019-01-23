# Canvas Kit React

This project provides a set of React components that can be used to implement user experiences
consistent with [Workday's design principles](https://design.workday.com/).

## Kit Status

We will continue to update this list as we add or make significant changes to components that are
part of Canvas.

**Legend** :white_check_mark: Available :construction: In Progress :round_pushpin: Planned

### Basic Guidelines

| Component                                                    |       Status       |
| ------------------------------------------------------------ | :----------------: |
| [Colors](https://design.workday.com/guidelines/visual/color) | :white_check_mark: |
| [Depth](https://design.workday.com/guidelines/visual/depth)  | :white_check_mark: |
| [Icons](https://design.workday.com/guidelines/visual/icons)  | :white_check_mark: |
| [Space](https://design.workday.com/guidelines/visual/space)  | :white_check_mark: |
| Grid System                                                  | :white_check_mark: |
| [Type](https://design.workday.com/guidelines/visual/type)    | :white_check_mark: |

### Components

| Component                                                                             |       Status       |
| ------------------------------------------------------------------------------------- | :----------------: |
| Avatar                                                                                | :white_check_mark: |
| [Button - Standard](https://design.workday.com/guidelines/components/buttons)         | :white_check_mark: |
| [Button - Drop Down](https://design.workday.com/guidelines/components/buttons)        |                    |
| [Button - Icon](https://design.workday.com/guidelines/components/buttons)             | :white_check_mark: |
| [Button - Link](https://design.workday.com/guidelines/components/buttons)             |                    |
| Card                                                                                  | :white_check_mark: |
| [Checkbox](https://design.workday.com/guidelines/components/check-boxes)              |                    |
| Color Picker                                                                          |                    |
| Context Menu                                                                          |                    |
| [Cookie Banner](modules/canvas-kit-react-cookie-banner)                               | :white_check_mark: |
| [Date Input](https://design.workday.com/guidelines/components/date-picker)            |                    |
| Dialog                                                                                |                    |
| [Drop Down Select](https://design.workday.com/guidelines/components/dropdown-menus)   |                    |
| Floating Action Toolbar                                                               | :white_check_mark: |
| [Header](https://design.workday.com/guidelines/components/application-header)         | :white_check_mark: |
| List                                                                                  |                    |
| [Loading Animation](canvas-kit-react-loading-animation)                               | :white_check_mark: |
| Numeric Input                                                                         |                    |
| [Page Header](https://design.workday.com/guidelines/components/page-header)           | :white_check_mark: |
| Pop Up                                                                                |                    |
| Progress Bar                                                                          |                    |
| [Radio Buttons](https://design.workday.com/guidelines/components/radio-buttons)       |                    |
| [Rich Text Editor](https://design.workday.com/guidelines/components/rich-text-editor) |                    |
| Slider                                                                                |                    |
| [Table](https://design.workday.com/guidelines/components/grids)                       | :white_check_mark: |
| [Tabs](https://design.workday.com/guidelines/components/tabs)                         |                    |
| Toast                                                                                 |                    |
| Text Area                                                                             |                    |
| [Text Input](https://design.workday.com/guidelines/components/text-inputs)            |                    |
| [Toggle Switch](modules/canvas-kit-react-toggle)                                      | :white_check_mark: |

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

## Exporting your module

1. If your module's `index.ts` has a default export, make sure it is available as a named export as
   well. This allows for greater flexibility in how developers consume your module.
2. Add `export * from '@workday/canvas-kit-react-<NAME>'` to `modules/canvas-kit-react/index.ts` so
   that consumers of our bundle module (`@workday/canvas-kit-react`) can use your module too.

## Building modules

**`yarn build`**

This will build all modules' CSS and JS.

## Testing modules

**`yarn test`**

This will start the unit tests and run code coverage.

**`yarn updateSnaps`**

If you know you've made a breaking visual change, use this command to update your snapshot tests.
This will add files to your workspace that you'll need to commit.

## [Contributing](CONTRIBUTING.md)

Want to contribute to Canvas Kit React? Please read our [contributing guidelines](CONTRIBUTING.md)
to get started

## Code Style Guide

This project follows UIC's
[WD-components Style Guide](https://ghe.megaleo.com/UIC/wd-components/blob/master/docs/STYLEGUIDE.md).
Rules are enforced using [TSLint](https://palantir.github.io/tslint/) and code formatting is
provided through [Prettier](prettier.io).

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

- [Format on save](https://github.com/prettier/prettier-vscode#format-on-save)

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
