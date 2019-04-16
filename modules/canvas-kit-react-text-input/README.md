# Canvas Kit Text Input

Canvas-styled React text input components.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-text-input
```

# TextInput

## Usage

```tsx
import * as React from 'react';
import TextInput from '@workday/canvas-kit-react-text-input';

<TextInput placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<TextInput error={TextInput.ErrorType.Alert} />
```

## Component Props

### Required

#### `label: string`

> The label text displayed for the input.

### Optional

#### `disabled: boolean`

> Whether or not the input is disabled.

Default: `false`

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

---

#### `hasIcon: boolean`

> Whether or not the input will have an icon displayed. If yes, extra padding will be added to the
> right.

Default: `false`

---

#### `inputRef: React.Ref<HTMLInputElement>`

> The ref callback for the inner input element.

Default: `undefined`

---

#### `onChange: React.ChangeEventHandler<HTMLInputElement>`

> The callback fired when the value is changed.

Default: `undefined`

---

#### `placeholder: string`

> Placeholder text to be displayed if there is no input value.

Default: `''`

---

#### `readOnly: boolean`

> If true, user will be unable to interact with the field.

Default: `false`

---

#### `type: string`

> HTML5 input type

Default: `text`

---

#### `value: any`

> Input value

Default: `undefined`

---
