# Canvas Kit Fonts

By default, no fonts are included with Canvas Kit modules. To use official Canvas Kit fonts, install
and import the `@workday/canvas-kit-react-fonts` module.

```sh
yarn add @workday/canvas-kit-react-fonts
```

## Usage

Canvas Kit components uses the CSS-in-JS library [emotion](https://emotion.sh) for styling. So the
preferred method for adding fonts to a project is to use the library's `injectGlobal` method. It
will apply emotion styles globally to your project. If you're using Canvas Kit components already,
you should have emotion added to your project. If not, start by adding it as a dependency:

```sh
yarn add emotion
```

Then in your index or main file of your project...

```jsx
import {injectGlobal} from 'emotion';
import fonts from '@workday/canvas-kit-react-fonts';

// Inject all of Canvas' @font-face declarations to <head> via emotion
injectGlobal(...fonts);
```

Finally, use one of our official typography styles from the `canvas-kit-react-core` module or add
`"Roboto"` (or `"Roboto Mono"` for monospace fonts) as one of the `font-family` names in your CSS.

Examples:

```jsx
import {type} from '@workday/canvas-kit-react-core';

...

render(
  return <p className={css(type.body)}>Lorem Ipsum...</p>
)
```

or

```css
p {
  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  ...;
}
pre {
  font-family: 'Roboto Mono', 'Courier New', Courier, monospace;
  ...;
}
```
