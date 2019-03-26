# Canvas Kit Popover

A popover component that allows you to render content above another. Note: In our example we use
Material UIs popper component to wrap our popover component and position it, which is a wrapper to
Popper.js. For reference: https://material-ui.com/api/popper/

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-popup
```

## Usage

```tsx
import * as React from 'react';
import Popper from '@material-ui/core/Popper';
import {Popover, PopoverPadding} from '@workday/canvas-kit-react-popup';

// We use Popper from Material UI for our positioning
<Popper placement={'bottom'} open={this.state.open} anchorEl={anchorEl}>
  <Popover
    width={300}
    heading={'Popover Title'}
    paddingSize={PopoverPadding.l}
    handleClose={this.handleClose}
  >
    {this.props.children}
  </Popover>
</Popper>;
```

## Static Properties

> None

## Component Props

### Required

### `paddingSize: PopoverPadding`

> You can choose between zero, s, l for your padding

---

### Optional

#### `handleClose: () => void`

> Callback to handle close of your popover and any other event when the popover is closed.

---

#### `width: number | string`

> Width of the card.

Default: `null`

---

#### `depth: CanvasDepthValue`

> Depth of the card. Style imported from `@workday/canvas-kit-react-core`.

Default: `depth[2]`

#### `heading: ReactNode`

> Heading at the top of the card.

Default: `null`
