# Canvas Kit Card

Generic Canvas card component

## Usage

```js
import Card from '@workday/canvas-kit-react-card';
import {spacing} from '@workday/canvas-kit-react-core';

<Card heading="Title">
  Card contents
</Card>

<Card padding={spacing.l}>
  Card with custom padding
</Card>

<Card size={1}>
  Sized card
</Card>
```

#### Properties

**Optional**

**`heading`**  
Type: `ReactNode`  
Default: `undefined`  
Heading at top of card.

**`size`**  
Type: `CardSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12`  
Default: `undefined`  
Button size.

**`padding`** Type: `0 | CanvasSpacingValue` Default: `spacing.l` Padding for card. Style imported
from `@workday/canvas-kit-react-core`.

**`depth`**  
Type: `CanvasDepthValue`  
Default: `depth[2]`  
Depth for card. Style imported from `@workday/canvas-kit-react-core`.

**`breakpoints`**  
Type: `Object`  
Default:

```js
{
  sm: 320,
  md: 768,
  lg: 1120,
}
```

The breakpoints at which to apply responsive card styling.
