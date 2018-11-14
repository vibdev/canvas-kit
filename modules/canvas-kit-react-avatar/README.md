# Canvas Kit Avatar

An avatar component to show a users photo with a circular crop.

### Properties

**`themeColor` (optional):** `AvatarTheme`  
Default: `AvatarTheme.Light`

The theme of the avatar if using a default image (Light or Dark).

**`size` (optional):** `AvatarSize`  
Default: `AvatarSize.m`

The px size of the avatar

| Variable | Size |
| -------- | ---- |
| `xs`     | 16   |
| `s`      | 24   |
| `m`      | 32   |
| `l`      | 40   |
| `xl`     | 64   |
| `xxl`    | 120  |

**`url` (optional):** `string`

The URL of the users photo. Expects a square (1:1) photo.

**`buttonRef`**  
Type: `React.Ref<HTMLButtonElement>`  
Returns the ref to the rendered HTMLButtonElement.
