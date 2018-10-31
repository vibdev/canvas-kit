# Canvas Kit Avatar

An avatar component to show a users photo with a circular crop.

### Properties

**`theme` (optional):** `AvatarTheme`  
Default: `AvatarTheme.Light`

The theme of the avatar if using a default image (Light or Dark).

**`size` (optional):** `AvatarSize`  
Default: `AvatarSize.m`

The px size of the avatar

| Variable | Size  |
| -------- | ----- |
| `xs`     | 16px  |
| `s`      | 24px  |
| `m`      | 32px  |
| `l`      | 40px  |
| `xl`     | 64px  |
| `xxl`    | 120px |

**`url` (optional):** `string`

The URL of the users photo. Expects a square (1:1) photo.

**`buttonRef`**  
Type: `React.Ref<HTMLButtonElement>`  
Returns the ref to the rendered HTMLButtonElement.
