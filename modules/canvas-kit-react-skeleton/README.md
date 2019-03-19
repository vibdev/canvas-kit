# Canvas Kit Skeleton

A component that renders a skeleton. The skeleton component takes in children mock-ups and displays
them. The skeleton will display an animated sheen over its children to indicate loading. The
component wraps its children in aria-hidden containers and displays an aria-live status specifying
that the content is loading.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-skeleton
```

## Usage

```tsx
import * as React from 'react';
import {
  Skeleton,
  SkeletonHeader,
  SkeletonShape,
  SkeletonText,
} from '@workday/canvas-kit-react-skeleton';

<Skeleton>
  <SkeletonShape width={50} height={50} borderRadius={99} />
  <SkeletonHeader />
  <h1>Hello!</h1>
  <SkeletonText lineCount={3} />
</Skeleton>;
```

> Note: the `Hello!` will show up this allows the flexibility for users to create any additional
> Skeletons they may need.

## Static Properties

> None

## Component Props

> None

# SkeletonShape

A component that renders a shape mock-up. The ability to alter the borderRadius, width, and height
of the component allows users to create rectangles, circles, and ovals.

## Usage

```tsx
import * as React from 'react';
import {SkeletonShape} from '@workday/canvas-kit-react-skeleton';

<SkeletonShape width={50} height={50} borderRadius={99} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `width: number | string`

> The width of the skeletonShape. SkeletonShape width in `px` or `%`.

Default: `"100%"`

#### `height: number | string`

> The height of the skeletonShape. SkeletonShape height in `px` or `%`.

Default: `"100%"`

#### `borderRadius: number | string`

> The borderRadius of the skeletonShape in `px` or `%`.

Default: `0`

# SkeletonHeader

A component that renders a header mock-up. The header mock-up will have a width of `100%` and height
of `28px`.

## Usage

```tsx
import * as React from 'react';
import {SkeletonHeader} from '@workday/canvas-kit-react-skeleton';

<SkeletonHeader />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

> None

# SkeletonText

A component that renders a text mock-up. This component might be used to portray a single line of
text `<span>`, for example, or a `<p>` paragraph of text. The text mock-up will have a width of
`100%` and height of `21px`. If there is more then one line of text the last line of the
SkeletonText will have a width of '60%'.

## Usage

```tsx
import * as React from 'react';
import {SkeletonText} from '@workday/canvas-kit-react-skeleton';

<SkeletonText lineCount={2} />;
```

## Static Properties

> None

## Component Props

### Required

#### `lineCount: number`

> The number of lines the skeletonText will display.

### Optional

> None
