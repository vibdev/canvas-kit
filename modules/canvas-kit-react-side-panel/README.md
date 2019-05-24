# Canvas Kit Side Panel

Side Panel component that provides a container for navigating elements. It also provides a way to
surface information of either left or right side of the screen.

## Installation

```sh
yarn add @workday/canvas-kit-react-side-panel
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
  isResponsive: boolean;
}

class SidePanelExample extends React.Component<{}, SidePanelState> {
  public state = {
    open: true,
    isResponsive: true,
  };
  public componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  public componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }
  public render() {
    const {open} = this.state;
    return (
      <SidePanel open={open} onClickHandler={this.onClick} title={'Side Panel Header'}>
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
    const threshold = window.innerWidth > 924;
    const isResponsive = (threshold && !this.state.open) || (!threshold && this.state.open);
    this.setState({
      open: !this.state.open,
      isResponsive,
    });
  };

  private handleResize = () => {
    const threshold = window.innerWidth > 924;
    if (this.state.isResponsive) {
      if (threshold && !this.state.open) {
        this.setState({
          open: true,
        });
      }
      if (!threshold && this.state.open) {
        this.setState({
          open: false,
        });
      }
    }
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

### Optional

#### `onToggleClick: () => void`

> Callback that handles clicking toggle button to open or close side panel.

---

#### `title: string | React.ReactNode`

> Custom title or element to display as a header to the side panel.

---

#### `openRight: boolean`

> Determines if the side panel opens from the right

---

#### `openLeft: boolean`

> Determines if the side panel opens from the left

Default: `true`

---

#### `padding: CanvasSpacingValue`

> Adjust padding of the side panel.

Default: `24px` when it's open and `0px` when it's closed

---
