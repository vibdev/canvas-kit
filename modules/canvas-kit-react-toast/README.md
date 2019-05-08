# Canvas Kit Toast

Canvas-styled React toast component. Allows for a brief message to be be shown about a process or
action occuring in the app.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-toast
```

# Toast

## Usage

Extends from the Popup component.

```tsx
import * as React from 'react';
import Popper from '@material-ui/core/Popper';
import {Toast} from '@workday/canvas-kit-react-toast';

// We use Popper from Material UI for our positioning
<Popper placement={'top'} open={this.state.open} anchorEl={anchorEl}>
  <Toast width={300} handleClose={this.handleClose}>
    {this.props.children}
  </Toast>
</Popper>;
```

## Static Properties

## Component Props

### Required

### Optional

#### `width: number | string`

> Width of the toast.

---

#### `depth: CanvasDepthValue`

> Depth of the toast. Style imported from `@workday/canvas-kit-react-core`.

Default: `depth[2]`

---

#### `handleClose: () => void`

> Callback to handle close of your Popup and any other event when the Popup is closed.

---

#### `transformOrigin: TransformOrigin`

> Origin from which the popup will animate from

Default:

```js
{
  horizontal: 'center',
  vertical: 'top',
}
```

---

#### `displayDuration: number`

> Indicates how long to keep the toast open

Default: 0

---

#### `hasActionLink: boolean`

> Allows user to pass an action link to toast

Default: 0

---
