# Canvas Kit Button

Components implementing Canvas buttons.

## Usage

### Button

Extends `<button>` with Canvas button styling.

```tsx
import { Button } from '@workday/canvas-kit-react-button'

<Button>Secondary Button</Button>
<Button buttonType={Button.Types.Primary}>Primary Button</Button>
<Button buttonType={Button.Types.Delete}>Delete Button</Button>

<Button buttonSize={Button.Sizes.Medium}>Medium Button</Button>
<Button buttonSize={Button.Sizes.Small}>Small Button</Button>
```

#### Properties

**Optional**

**`buttonType`**  
Type: `Button.Types = { Primary, Secondary, Delete }`  
Default: `Button.Types.Secondary`  
Button type.

**`buttonSize`**  
Type: `Button.Sizes = { Small, Medium, Large }`  
Default: `Button.Sizes.Large`  
Button size.

**`grow`**  
Type: `{true , false}`  
Default: `false`  
If true, the button's will grow to its container's width.

**`buttonRef`**  
Type: `React.Ref<HTMLButtonElement>`  
Returns the ref to the rendered HTMLButtonElement.

### Icon Button

Button containing an icon. Icon may be a component from
[`canvas-kit-react-icon`](../canvas-kit-react-icon).

```tsx
import { IconButton } from '@workday/canvas-kit-react-button'
import { SystemIcon } from '@workday/canvas-kit-react-icon'
import { activityStreamIcon } from '@workday/canvas-system-icons-web';

<IconButton>
  <SystemIcon icon={activityStreamIcon} />
</IconButton>

<IconButton>
  <svg>...</svg>
</IconButton>
```
