# Canvas Kit Avatar

> A component showing a user's photo with a circular crop.

## Usage

```tsx
import * as React from 'react';
import {Avatar, AvatarTheme, AvatarSize} from '@workday/canvas-kit-react-avatar';

// Basic
<Avatar />

// Using static properties on Avatar
<Avatar
  size={Avatar.Size.xs}
  themeColor={Avatar.ThemeColor.Dark}
  onClick={() => { window.alert('Avatar Clicked') }}
/>

// Using AvatarTheme and AvatarSize imports directly
<Avatar size={AvatarSize.xs} themeColor={AvatarTheme.Dark} />
```

## Static Properties

#### `ThemeColor: AvatarTheme`

```tsx
// Example
<Avatar themeColor={Avatar.ThemeColor.Dark} />
```

---

#### `Size: AvatarSize | number`

```jsx
// Example
<Avatar size={Avatar.Size.xs} />

// Custom Size.
// Note: Please use the predefined sizes as it works nicely with the Canvas Design System
<Avatar size={48} />
```

## Component Props

### Required

> None

### Optional

#### `themeColor: AvatarTheme` _(optional)_

> The theme of the avatar if using a default image.

Default: `AvatarTheme.Light`

| Theme               | Description                      |
| ------------------- | -------------------------------- |
| `AvatarTheme.Light` | Light grey background, dark icon |
| `AvatarTheme.Dark`  | Dark blue background, white icon |

---

#### `size: AvatarSize` _(optional)_

> The diameter of the avatar in pixels

Default: `AvatarSize.m`

| Variable | Size (px) |
| -------- | --------- |
| `xs`     | 16        |
| `s`      | 24        |
| `m`      | 32        |
| `l`      | 40        |
| `xl`     | 64        |
| `xxl`    | 120       |

---

#### `url: string` _(optional)_

> The URL of the user's photo. Expects a square (1:1) photo.

---

#### `buttonRef: React.Ref<HTMLButtonElement>` _(optional)_

> A ref to the underlying `<button>` element.

---

#### `onClick: (React.SyntheticEvent) => void` _(optional)_

> A `click` event handler for this component.
