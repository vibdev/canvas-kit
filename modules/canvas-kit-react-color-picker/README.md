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
  selectedHexColor={this.state.color}
  onEnterPress={this.onEnterPress}
/>;
```

## Static Properties

> None

## Component Props

### Required

#### `onEnterPress: (color: string) => void`

> Handles onKeyPress `Enter` for submitting a selected color

#### `selectedHexColor: string`

> The selected color that was entered

### Optional

#### `showSwatchTileCheckIcon: boolean`

> Optionally show a check icon when a cusgtom hex color has been selected
