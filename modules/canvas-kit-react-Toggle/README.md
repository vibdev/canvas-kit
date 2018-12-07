# Canvas Kit Toggle

## Usage

This component is a pill shaped toggle switch. The state of the toggle will be managed by an
external container component.

`isChecked: boolean` - is the toggle active

`onClick: () => void` - callback when the switch is clicked (such as setting state on a parent to
pass to isChecked)

`labelPosition?: 'before' | 'after'` - optional, defaults to after if not provided

`className:? - string`

`children?: JSX.element` - a label

```javascript
import {ToggleSwitch} from '@workday/pt-react-components';
```

```jsx
<ToggleSwitch onClick={callbackfn} isChecked={boolean} labelPosition={'before'}>
  <span>Some Super Fancy Label</span>
</ToggleSwitch>
```
