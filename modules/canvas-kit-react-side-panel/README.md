# Canvas Kit Side Panel

Side Panel component that provides a container for navigating elements. It also provides a way to
surface information of either left or right side of the screen.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-side-panel
```

# Side Panel

## Usage

```tsx
import * as React from 'react';
import {
  Button,
  ButtonTypes,
  IconButton,
  IconButtonTypes,
  ButtonSizes,
} from '@workday/canvas-kit-react-button';
import SidePanel from '@workday/canvas-kit-react-side-panel';

interface SidePanelState {
  open: boolean;
  responsive: boolean;
}

class SidePanelExample extends React.Component<{}, SidePanelState> {
  public state = {
    open: true,
  };
  public render() {
    const {open} = this.state;
    return (
      <SidePanel
        openDirection={select(label, options, defaultValue)}
        open={open}
        onToggleClick={this.onClick}
        breakpoint={800}
        onBreakpointChange={this.handleBreakpoint}
        header={'Side Panel Header'}
      >
        {open ? (
          <Button buttonType={ButtonTypes.Primary}>Add New</Button>
        ) : (
          <IconButton buttonSize={ButtonSizes.Small} buttonType={IconButtonTypes.Filled}>
            <SystemIcon icon={plusIcon} />
          </IconButton>
        )}
        <ul>
          <li className={listItemStyles}>{open && <span>Home</span>}</li>
          <li className={listItemStyles}>{open && <span>Favorites</span>}</li>
          <li className={listItemStyles}>{open && <span>Items</span>}</li>
        </ul>
      </SidePanel>
    );
  }

  private onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  private handleBreakpoint = (open: boolean) => {
    this.setState({
      open: open,
    });
  };
}
```

## Static Properties

> None

## Component Props

All standard input attributes are available and can be passed to the input field.

### Required

#### `open: boolean`

> Determines if the side panel is open or closed.

---

#### `breakpoint: number`

> Determines the breakpoint at which the side panel opens or closes

Default: `834px`

#### `onBreakpointChange: (open: boolean) => void;`

> Callback that gets called on resize and determines when the side panel should open or close
> depending on the size of the browser and the breakpoint set.

---

### Optional

#### `onToggleClick: () => void`

> Callback that handles clicking toggle button to open or close side panel.

---

#### `header: string | React.ReactNode`

> Custom title or element to display as a header to the side panel.

---

#### `openDirection: SidePanelOpenDirection`

> Determines from what side the side panel opens

`SidePanelOpenDirection.Left` or `SidePanelOpenDirection.Right`

Default: `SidePanelOpenDirection.Left`

---

#### `padding: CanvasSpacingValue`

> Adjust padding of the side panel when it's open.

Default: `24px` when it's open and `16px` top and bottom when it's closed

---
