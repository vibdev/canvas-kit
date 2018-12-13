# Canvas Kit Card

Generic Canvas card component

## Usage

```tsx
import Card from '@workday/canvas-kit-react-card';
import {depth, spacing} from '@workday/canvas-kit-react-core';

<Card heading="Title">
  Card contents
</Card>

<Card padding={spacing.l}>
  Card with custom padding
</Card>

<Card depth={depth[1]}>
  Card with custom depth
</Card>
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `heading: ReactNode`

> Heading at top of card.

Default: `null`

#### `padding: 0 | CanvasSpacingValue`

> Padding for card. Style imported from `@workday/canvas-kit-react-core`.

Default: `spacing.l`

#### `depth: CanvasDepthValue`

> Depth for card. Style imported from `@workday/canvas-kit-react-core`.

Default: `depth[2]`

#### `grow: boolean`

> If true, the button's will grow to its container's width.

Default: `null`

#### `width: number | string`

> Width of the card.

Default: `null`

#### `height: number | string`

> Height of the card.

Default: `null`
