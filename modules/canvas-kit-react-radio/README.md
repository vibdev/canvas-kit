# Canvas Kit Radio

A radio input.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-radio
```

## Usage

```tsx
import * as React from 'react';
import {Radio} from '@workday/canvas-kit-react-radio';

<Radio disabled={false} checked={checked} onChange={this.handleCheck} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `checked: boolean`

> Whether or not the radio is checked (`true`) or not checked (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the radio is disabled (not able to be checked on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying input radio and label component.

---

#### `label: string`

> The content of the label associated to the input radio component.

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the radio state changes.

---

#### `value: string`

> The `value` attribute of the input radio.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying input radio element. Use this to imperatively check or focus this
> component.
