# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.6.4...@workday/canvas-kit-css-core@2.0.0) (2018-10-01)


### Bug Fixes

* **Fonts:** added font-family variables to type.scss ([4c52ed2](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/4c52ed2))
* **Fonts:** Refactored fonts into their own module ([87da6a1](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/87da6a1))
* **type-link:** Fix link type ([36bbabb](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/36bbabb))


### Features

* **core-type:** Add font smoothing for mozilla ([a5dcbeb](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/a5dcbeb))
* **type:** Explicitly add 'variant' to type variations ([bc71294](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/bc71294))
* **type:** Update readme with new type info ([3ce550d](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/3ce550d))
* **type:** Update story ([e1d3541](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/e1d3541))
* **type:** Update type to use new system with variations ([59f315e](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/59f315e))


### BREAKING CHANGES

* **type:** Some of the type classes and mixins have changed. See
the list below:

- Label type is now a variant. wdc-type-label-1 and wdc-type-label-2 are
affected (classes and mixins). Now you they will only apply the variant
styling so you generally want to combine it with a type hierarchy level
(i.e. .wdc-type-body.wdc-type-label)
- Button type is now a variant. wdc-type-btn is affected (class and mixin).
Combine with a type hierarchy level (i.e. .wdc-type-body.wdc-type-btn)
- Hint text is now a variant. wdc-type-hint is affected (class and
mixin). Combine with a type hierarchy level (i.e. .wdc-type-body-2.wdc-type-hint)
* **Fonts:** Refactor fonts into their own module so that consumers of Canvas are not
automatically using our CDN's font source automatically. This requires that consumers 'opt in' to
using fonts by including it in their project declaratively through a link tag or through an import
statement processed by a bundler like Webpack.

DESOPS-480




<a name="1.6.4"></a>
## [1.6.4](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.6.3...@workday/canvas-kit-css-core@1.6.4) (2018-09-10)


### Bug Fixes

* **fonts:** updated ttf -> truetype in src format ([02f1a8f](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/02f1a8f))




<a name="1.6.3"></a>
## [1.6.3](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.6.2...@workday/canvas-kit-css-core@1.6.3) (2018-09-04)


### Bug Fixes

* **a11y:** Prevent focus styles from bleeding into other elements when canvas-kit-css is imported ([2218cfa](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/2218cfa))




<a name="1.6.2"></a>
## [1.6.2](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.6.1...@workday/canvas-kit-css-core@1.6.2) (2018-07-23)


### Bug Fixes

* **type.scss:** change refs to font-weight: 600 to 700 to match included font-weights ([f1002ba](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/f1002ba))




<a name="1.6.1"></a>
## [1.6.1](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.6.0...@workday/canvas-kit-css-core@1.6.1) (2018-05-22)




**Note:** Version bump only for package @workday/canvas-kit-css-core

<a name="1.6.0"></a>
# [1.6.0](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.5.3...@workday/canvas-kit-css-core@1.6.0) (2018-03-30)


### Features

* **table-errors:** Change error row border colors ([a5d957a](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/a5d957a))




<a name="1.5.4"></a>
## [1.5.4](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.5.3...@workday/canvas-kit-css-core@1.5.4) (2018-03-30)




**Note:** Version bump only for package @workday/canvas-kit-css-core

<a name="1.5.3"></a>
## [1.5.3](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.5.2...@workday/canvas-kit-css-core@1.5.3) (2018-03-27)


### Bug Fixes

* **css-core:** fixed typos ([98e3c96](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/98e3c96))
* **outline:** added better specifiticity to a[href] ([9bf7218](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/9bf7218))
* **outline:** added non what-input implementation for icon list ([17079a3](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/17079a3))
* **outline:** added space ([71ec41e](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/71ec41e))
* **outline:** removed conflicting styles ([4a16033](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/4a16033))
* **outline:** removed outlines for marketing headers ([2fe3d5f](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/2fe3d5f))
* **outline:** updated focus class in type.scss mixins ([063a3c1](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/063a3c1))




<a name="1.5.2"></a>
## [1.5.2](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.5.1...@workday/canvas-kit-css-core@1.5.2) (2018-03-21)


### Bug Fixes

* **core:** add assets to variables module ([64a8f6f](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/64a8f6f))
* **core:** fix system icon path ([68244f0](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/68244f0))




<a name="1.5.1"></a>
## [1.5.1](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/compare/@workday/canvas-kit-css-core@1.5.0...@workday/canvas-kit-css-core@1.5.1) (2018-03-19)




**Note:** Version bump only for package @workday/canvas-kit-css-core

<a name="1.5.0"></a>
# 1.5.0 (2018-02-16)


### Bug Fixes

* **readmes:** fix links/references in readmes ([27cbeaf](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/27cbeaf))
* **type:** add missing type styles to storybook story ([ca90022](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/ca90022))


### Features

* **core:** use design assets colors and depth ([b4b079a](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/b4b079a))
* **type:** add support for monotype ([858fe56](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/858fe56))




<a name="1.4.0"></a>
# 1.4.0 (2018-02-15)


### Bug Fixes

* **readmes:** fix links/references in readmes ([27cbeaf](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/27cbeaf))
* **type:** add missing type styles to storybook story ([ca90022](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/ca90022))


### Features

* **core:** use design assets colors and depth ([b4b079a](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/b4b079a))
* **type:** add support for monotype ([858fe56](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/858fe56))




<a name="1.3.0"></a>
# 1.3.0 (2018-02-15)


### Bug Fixes

* **readmes:** fix links/references in readmes ([27cbeaf](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/27cbeaf))
* **type:** add missing type styles to storybook story ([ca90022](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/ca90022))


### Features

* **core:** use design assets colors and depth ([b4b079a](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/b4b079a))
* **type:** add support for monotype ([858fe56](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/858fe56))




<a name="1.2.0"></a>
# 1.2.0 (2018-02-01)


### Bug Fixes

* **readmes:** fix links/references in readmes ([27cbeaf](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/27cbeaf))
* **type:** add missing type styles to storybook story ([ca90022](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/ca90022))


### Features

* **type:** add support for monotype ([858fe56](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/858fe56))




<a name="1.1.0"></a>
# 1.1.0 (2018-01-30)


### Bug Fixes

* **readmes:** fix links/references in readmes ([27cbeaf](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/27cbeaf))
* **type:** add missing type styles to storybook story ([ca90022](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/ca90022))


### Features

* **type:** add support for monotype ([858fe56](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/858fe56))




<a name="1.0.1"></a>
## 1.0.1 (2018-01-23)


### Bug Fixes

* **readmes:** fix links/references in readmes ([27cbeaf](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-core/commits/27cbeaf))
