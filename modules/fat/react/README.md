# Canvas Kit Floating Action Toolbar

Full width toolbar fixed to bottom of screen.

Although not required, [buttons](../canvas-kit-react-button) are often used in floating action
toolbars. The primary action button should be left aligned followed by secondary buttons. The
primary button is on the right only in task orchestration and on mobile devices.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-fat
```

## Usage

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';
import {FloatingActionToolbar} from '@workday/canvas-kit-react-fat';

<FloatingActionToolbar>
  <Button buttonType={ButtonTypes.Primary}>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</FloatingActionToolbar>;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `fixed: boolean`

> Fixes the toolbar to the bottom of the window (uses `position: fixed`)

## Responsive Behavior

At 575px, responsive styles will take effect:

- Applies a flex box to the buttons
- Makes single-button groups full width
- All buttons will become the same width (`flex: 1`).
- Button order will become reversed, making left-aligned primary buttons right-aligned.

> When on a mobile form factor, the button placement should flip to have the primary button on the
> far right.