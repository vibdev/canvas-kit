# Canvas Kit Toggle

## Usage

This component is a pill shaped toggle switch. The state of the toggle will be managed by an
external container component.

`checked: boolean` - is the toggle active

`onChange: () => void` - callback when the switch is clicked (such as setting state on a parent to
pass to isChecked)

```javascript
import {ToggleSwitch} from '@workday/pt-react-components';
```

```jsx
<ToggleSwitch onChange={callbackfn} checked={boolean} />
```
