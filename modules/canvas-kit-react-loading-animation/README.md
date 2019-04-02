# Canvas Kit CSS Loading Animation

A component that renders a loading animation.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-loading-animation
```

# LoadingAnimation

## Usage

```tsx
import * as React from 'react';
import {LoadingAnimation} from '@workday/canvas-kit-react-loading-animation';

<LoadingAnimation scale={1} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

> None

# LoadingSpinner

## Usage

```tsx
import * as React from 'react';
import {LoadingSpinner} from '@workday/canvas-kit-react-loading-animation';

<LoadingSpinner />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `color: string`

> The color of the spinner

Default: colors.blueberry600

---

#### `scale: number`

> Adjust the scale of the spinner

Default: 1

---

#### `className: string`

> Optional className to adjust container styles

Default: none
