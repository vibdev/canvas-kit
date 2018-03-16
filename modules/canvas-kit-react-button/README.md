# Canvas Kit Button

Components implementing Canvas buttons.

## Usage

**This package uses CSS.**  
If you're using webpack, you must enable a CSS loader.

### Button

Extends `<button>` with Canvas button styling.

```jsx
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

### Icon Button

Button containing an icon. Icon may be a component from [`canvas-kit-react-icon`](../canvas-kit-react-icon).

```jsx
import { IconButton } from '@workday/canvas-kit-react-button'
import { SystemIcon } from '@workday/canvas-kit-react-icon'

<IconButton>
  <SystemIcon name={SystemIcon.Icons.Edit} />
</IconButton>

<IconButton>
  <svg>...</svg>
</IconButton>
```
