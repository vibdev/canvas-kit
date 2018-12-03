# Canvas Kit Card

Generic Canvas card component

## Usage

```js
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

#### Properties

**Optional**

**`heading`**  
Type: `ReactNode`  
Default: `undefined`  
Heading at top of card.

**`padding`** Type: `0 | CanvasSpacingValue` Default: `spacing.l` Padding for card. Style imported
from `@workday/canvas-kit-react-core`.

**`depth`**  
Type: `CanvasDepthValue`  
Default: `depth[2]`  
Depth for card. Style imported from `@workday/canvas-kit-react-core`.
