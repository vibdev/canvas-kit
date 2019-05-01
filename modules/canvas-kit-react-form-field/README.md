# Canvas Kit Form Field

Form field component with complementary elements for form inputs.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-form-field
```

# FormField

## Usage

```tsx
import * as React from 'react;
import FormField from '@workday/canvas-kit-react-form-field';
import TextInput from '@workday/canvas-kit-react-text-input';

<FormField
  label="Label"
  labelPosition={FormField.LabelPosition.Left}
  grow={true}
  error={FormField.ErrorType.Error}
  hintText="This field is reuqired."
>
  <TextInput value={this.state.value} onChange={() => {}}/>
</FormField>
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<TextInput error={TextInput.ErrorType.Alert} />
```

---

#### `LabelPosition: LabelPosition`

```tsx
<TextInput labelPosition={TextInput.LabelPosition.Left} />
```

## Component Props

### Required

#### `children: React.ReactNode`

> The input component to wrap.

### Optional

#### `error: ErrorType`

> The type of error to display, if any. This prop will be passed to the input component if
> applicable.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Red outline with error icon.    |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

---

#### `grow: boolean`

> Whether or not the field will expand to the width of the container. This prop will be passed to
> the input component if applicable.

Default: `false`

---

#### `hasIcon: boolean`

> Whether or not the input will have an icon displayed. If yes, extra padding will be added to the
> right.

Default: `false`

---

#### `hintText: React.ReactNode`

> The message displayed below the input field. Required if `error` is defined.

Default: `undefined`

---

#### `label: string`

> The label text displayed for the input.

---

#### `labelPosition: LabelPosition`

> The position of the label relative to the input field.

| Type | Description                                   |
| ---- | --------------------------------------------- |
| Top  | Display label on the left, inline with input. |
| Left | Display label blocked on top of input         |

Default: `LabelPosition.Top`

# Hint

> Component implementing hint text styling for forms.

## Usage

```tsx
import * as React from 'react;
import {Hint} from '@workday/canvas-kit-react-form-field';

<Hint error={Hint.ErrorType.Error}>
  This field is required.
</Hint>
```

## Static Properties

#### `ErrorType: ErrorType`

```tsx
<Hint error={Hint.ErrorType.Alert} />
```

## Component Props

### Optional

#### `error: ErrorType`

> The type of error to display, if any.

| Type  | Description                     |
| ----- | ------------------------------- |
| Error | Displays "Error:" prefix        |
| Alert | Yellow outline with alert icon. |

Default: `undefined`

# Label

> Component implementing label text styling for forms.

## Usage

```tsx
import * as React from 'react;
import {Label} from '@workday/canvas-kit-react-form-field';

<Label error={Label.LabelPosition.Left}>
  Label
</Label>
```

## Static Properties

#### `Position: LabelPosition`

```tsx
<Label error={Label.Position.Left} />
```

## Component Props

### Optional

#### `labelPosition: LabelPosition`

> Position of the label.

| Type | Description                                   |
| ---- | --------------------------------------------- |
| Top  | Display label on the left, inline with input. |
| Left | Display label blocked on top of input         |

Default: `LabelPosition.Top`
