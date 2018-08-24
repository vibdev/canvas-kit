# Canvas Kit Floating Action Toolbar

Full width toolbar fixed to bottom of screen.

## Usage

**This package uses CSS.**  
If you're using webpack, you must enable a CSS loader.

Although not required, [buttons](../canvas-kit-react-button) are often used in floating action
toolbars.

### Floating Action Toolbar

The toolbar can assume any `<div>` props.

For details on styling, refer to
[canvas-kit-css-fat](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-fat).

```jsx
import { FloatingActionToolbar } from '@workday/canvas-kit-react-fat'

<FloatingActionToolbar>
  <Button buttonType={ButtonTypes.Primary}>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</FloatingActionToolbar>
```

#### Fixed Positioning

Add the `fixed` property to fix the toolbar to the bottom of the container.

```jsx
<FloatingActionToolbar fixed>
  <Button>Button</Button>
</FloatingActionToolbar>
```
