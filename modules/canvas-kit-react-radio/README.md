# Canvas Kit Radio

Input of type radio

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

> Whether or not the radio input is checked (`true`) or not checked (`false`)

Default: `false`

---

#### `disabled: boolean`

> Whether or not the radio input is disabled (not able to be checked on or off)

Default: `false`

---

#### `id: string`

> The HTML attribute `id` for the underlying radio input and label component.

---

#### `label: string`

> The content of the label associated to the radio input component.

---

#### `onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void`

> A callback that gets called everytime the radio input state changes.

---

#### `value: string`

> The `value` attribute of the input radio.

---

#### `inputRef: React.Ref<HTMLInputElement>`

> A ref to the underlying radio input element. Use this to imperatively check or focus this
> component.

# Radio Button Group

> Group of radio inputs. This is a
> [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

## Usage

```tsx
import * as React from 'react';
import {radioButton, radionButtonGroup} from '@workday/canvas-kit-react-radio';

<RadioGroup>
  <Radio id="1" name="contact" value="email" label="E-mail" />
  <Radio id="2" name="contact" value="phone" label="Phone" />
  <Radio id="3" name="contact" value="fax" label="Fax (disabled)" disabled={true} />
  <Radio id="4" name="contact" value="mail" label="Mail" />
</RadioGroup>;
```

**Note:** while managing state using a unique `value` and a common `name` for each `Radio` child is
encouraged.

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<Radio>[]`

> Radio inputs to toggle between.

---

### Optional

#### `value: string | number`

> Identify which item is selected (toggled=true).  
> If a string is passed, the Radio with the corresponding value will be selected.  
> If a number is passed, the Radio with the corresponding index will be selected.

---

#### `onChange: (value:string | number)=> void`

> Callback function when a radio input is selected. The value (if defined) or the index of the input
> will be returned.
