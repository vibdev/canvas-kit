# Canvas Kit Color Picker

Color Picker is a two part component. It has a color input that handles custom hex colors and then
selecting specific swatches.

## Installation

```sh
yarn add @workday/canvas-kit-react-color-picker
```

or

```sh
yarn add @workday/canvas-kit-color-picker
```

## Usage

```tsx
import * as React from 'react';
import {ColorInput} from '@workday/canvas-kit-color-picker';

<ColorInput
  showSwatchTileCheckIcon={true}
  onChange={this.onChange}
  value={this.state.color}
  onValidColorChange={this.validColorChange}
/>;
```

## Static Properties

> None

## Component Props

### Required

#### `onChange: (color: string) => void`

> A onChange callback that passes up the value entered by the user

---

#### `onValidColorChange: (color: string) => void`

> A callback that passes up the valid hex value typed by the user

---

#### `value: string`

> The value entered by the user into the color input

---

### Optional

#### `showSwatchTileCheckIcon: boolean`

> Optionally show a check icon when a custom hex color has been selected

Default: `false`
