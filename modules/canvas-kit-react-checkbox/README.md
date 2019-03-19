# Canvas Kit Checkbox

A checkbox input.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-checkbox
```

## Usage

```tsx
import * as React from 'react';
import {Checkbox} from '@workday/canvas-kit-react-checkbox';

<Checkbox disabled={false} checked={checked} onChange={this.handleCheck} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `checked: boolean`

> Whether or not the checkbox is checked (`true`) or not checked (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the checkbox is disabled (not able to be checked on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying input checkbox and label component.

---

#### `id: label`

> The content of the label associated to the input checkbox component.

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the checkbox state changes.

---

#### `value: string`

> The `value` attribute of the input checkbox.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying input checkbox element. Use this to imperatively check or focus this
> component.
