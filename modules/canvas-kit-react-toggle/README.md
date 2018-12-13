# Canvas Kit Toggle

## Usage

This component is a pill shaped toggle switch. The state of the toggle will be managed by an
external container component.

`checked: boolean` - is the toggle active

`onChange: () => void` - callback when the switch is clicked (such as setting state on a parent to
pass to isChecked)

`disabled?: boolean` - if true, the toggle with be disabled

`value?: string` - the value of the checkbox for forms

`inputRef: React.Ref<HTMLInputElement>` - access to the input for any imperative changes

```javascript
import {ToggleSwitch} from '@workday/pt-react-components';
```

```jsx
<ToggleSwitch onChange={callbackfn} checked={boolean} />
```
