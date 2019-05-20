# Canvas Kit Color Preview

Color Preview is a two part component. It has a color input that handles custom hex colors and then
selecting specific swatches.

## Installation

```sh
yarn add @workday/canvas-kit-react-color-preview
```

or

```sh
yarn add @workday/canvas-kit-color-preview
```

# Color Preview

A component to show a color swatch

## Usage

```tsx
import * as React from 'react';
import {ColorPreview} from '@workday/canvas-kit-color-preview';

<ColorPreview value={this.state.color} />;
```

## Static Properties

> None

## Component Props

### Required

> None

---

### Optional

#### `value: string`

> The value entered by the user into the color input

Default: `#FFFFFF`

---
