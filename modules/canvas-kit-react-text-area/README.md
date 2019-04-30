# Canvas Kit Text Area

Canvas-styled React textarea component.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-text-area
```

# TextArea

## Usage

```tsx
import * as React from 'react';
import TextArea from '@workday/canvas-kit-react-text-area';

<TextArea placeholder="Placeholder" value={this.state.value} onChange={() => {}} />;
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<TextArea error={TextArea.ErrorType.Alert} />
```

## Component Props

### Required

None

### Optional

#### `disabled: boolean`

> Whether or not the text area is disabled.

Default: `false`

---

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

---

#### `inputRef: React.Ref<HTMLTextAreaElement>`

> The ref callback for the inner text area element.

---

#### `onChange: React.ChangeEventHandler<HTMLTextAreaElement>`

> The callback fired when the value is changed.

---

#### `placeholder: string`

> Placeholder text to be displayed if there is no input value.

Default: `''`

---

#### `readOnly: boolean`

> If true, user will be unable to interact with the field.

Default: `false`

---

#### `value: any`

> Text Area value

---

#### `resize: TextAreaResize`

> Set resize constraints on the text area

| Direction                 |
| ------------------------- |
| TextAreaResize.Both       |
| TextAreaResize.None       |
| TextAreaResize.Vertical   |
| TextAreaResize.Horizontal |

Default: `TextAreaResize.Both`

---
