# Canvas Kit Tooltip

A Tooltip component that renders information/text when the user hovers over an element.

Note: This Tooltip does not include a positioning engine. In our example we use Material UIs popper
component to wrap our Tooltip component and position it, which is a wrapper to Popper.js. For
reference: https://material-ui.com/api/popper/

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-tooltip
```

## Usage

```tsx
import * as React from 'react';
import Popper from '@material-ui/core/Popper';
import {Tooltip} from '@workday/canvas-kit-react-tooltip';

// We use Popper from Material UI for our positioning
<div
    ref={this.tooltipRef}
    onMouseEnter={this.onMouseEnter}
    onMouseLeave={this.onMouseLeave}
>
    <IconButton buttonType={IconButton.Types.Default} icon={xIcon} />
</div>
<Popper placement={'bottom'} open={this.state.open} anchorEl={anchorEl}>
  <Tooltip>{this.props.children}</Tooltip>
</Popper>;
```

## Static Properties

> None

## Component Props

### Required

> None

---

### Optional

#### `transformOrigin: PopoupOrigin`

> Origin from which the popup will animate from

Default:

```js
{
  horizontal: 'center',
  vertical: 'top',
}
```

---

#### `onMouseEnter: () => void`

> Callback to handle onMouseEnter of the tooltip

---

#### `onMouseLeave: () => void`

> Callback to handle onMouseLeave of the tooltip

---
