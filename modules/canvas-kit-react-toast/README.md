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
  <Toast handleClose={this.handleClose}>{this.props.children}</Toast>
</Popper>;
```

## Static Properties

## Component Props

### Required

### Optional

#### `handleClose: () => void`

> Callback to handle close of your Toast and any other event when the Toast is closed.

---

#### `handleActionLink: () => void`

> Callback to handle an action link

---

#### `actionLinkText: string`

> The text to display for the link

---

#### `transformOrigin: TransformOrigin`

> Origin from which the toast will animate from

Default:

```js
{
  horizontal: 'center',
  vertical: 'top',
}
```

---

#### `toastIcon: CanvasSystemIcon`

> Pass whatever I can you'd like to display on the left side of the Toast

---

#### `iconColor: string`

> The color of the icon

---
