# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

#### Disclaimer

> The documentation below is for the current Canvas buttons. The next iteration of our buttons have
> been implemented in this module, but will not be documented until we're ready to roll them out
> across all our products. We want to discourage their use until everyone can uptake them
> simultaneously for consistencies sake.
>
> The new buttons include new `ButtonTypes`, icon support, and the `ButtonSizes` equate to different
> button and font sizes.
>
> **If you would like to use the new buttons, please consult the design systems team and get
> approval first**

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-button
```

## Usage

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';

<Button>Button Label</Button>;
```

## Static Properties

#### `Sizes: ButtonSizes`

```tsx
<Button buttonSize={Button.Sizes.Small}>Small Button</Button>
```

---

#### `Types: ButtonTypes`

```tsx
<Button buttonType={Button.Types.Primary}>Primary Button</Button>
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `buttonType: ButtonTypes`

> The type of the button

Default: `ButtonTypes.Secondary`

| Theme       | Description                     |
| ----------- | ------------------------------- |
| `Primary`   | Orange background, white text   |
| `Secondary` | Gray background, dark gray text |
| `Delete`    | Red background, dark text       |

---

#### `buttonSize: ButtonSizes`

> The type of the button

Default: `ButtonSizes.Large`

| Theme    | Description                            |
| -------- | -------------------------------------- |
| `Small`  | 18px tall, small padding, small text   |
| `Medium` | 24px tall, medium padding, medium text |
| `Large`  | 40px tall, large padding, larger text  |

---

#### `grow: boolean`

> If true, the button will grow to its container's width.

Default: `false`

---

#### `buttonRef: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

# Icon Button

> Button containing an icon. Icon may be a component from
> [`canvas-kit-react-icon`](../canvas-kit-react-icon) or an svg element.

## Usage

```tsx
import * as React from 'react';
import {IconButton} from '@workday/canvas-kit-react-button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

<IconButton>
  <SystemIcon icon={activityStreamIcon} />
</IconButton>;
```

## Static Properties

> None

## Component Props

> Same as [`Button`](#canvas-kit-button)
