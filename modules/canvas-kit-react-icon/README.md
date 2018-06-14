# Canvas Kit Icon

Components assisting the rendering of Canvas accent, applet, and system icons.

Icon packages from [Design Assets](https://ghe.megaleo.com/design/design-assets) must be used with these components. No icons are bundled with this package.

## Usage

### Icon Packages

When using an icon package, you have the option of using named exports or using an individual icon module. If using named exports, you should ensure that you have configured [tree shaking](https://webpack.js.org/guides/tree-shaking/) correctly to prevent bundle bloat.

```jsx
# Named Export
import { shieldIcon } from '@workday/canvas-accent-icons-web'
<AccentIcon icon={shieldIcon} />

import * as AccentIcons from '@workday/canvas-accent-icons-web'
<AccentIcon icon={AccentIcons.shieldIcon} />

# Module Import
import shieldIcon from '@workday/canvas-accent-icons-web/dist/es6/shield'
<AccentIcon icon={shieldIcon} />
```

### Accent Icons

Use with `@workday/canvas-accent-icons-web`.

```jsx
import { colors } from '@workday/canvas-kit-react-core'
import { AccentIcon } from '@workday/canvas-kit-react-icon'
import { shieldIcon } from '@workday/canvas-accent-icons-web'

<AccentIcon icon={shieldIcon} />
<AccentIcon icon={shieldIcon} color={colors.pomegranate500} />
<AccentIcon icon={shieldIcon} size={80} />
```

#### Properties

**Required**

**`icon`:** `CanvasIcon`  
Icon imported from `@workday/canvas-accent-icons-web`

**Optional**

**`color`**  
Default: `colors.blueberry500`  
Icon color.

**`size`**  
Default: `56`  
Icon size in `px`.

**`transparent`**  
Default: `false`  
Toggle for transparent accent icon background. If false, the background fill will be white.

### Applet Icons

Use with `@workday/canvas-applet-icons-web`.

```jsx
import { AppletIcon } from '@workday/canvas-kit-react-icon'
import { benefitsIcon } from '@workday/canvas-applet-icons-web'

<AppletIcon icon={benefitsIcon} />
<AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
<AppletIcon icon={benefitsIcon} size={60} />
```

#### Properties

**Required**

**`icon`:** `CanvasIcon`  
Icon imported from `@workday/canvas-applet-icons-web`

**Optional**

**`color`**  
Default: `AppletIcon.Colors.Blueberry`  
Icon color. Must use a member of the `AppletIcon.Colors` enum.

**`size`**  
Default: `92`  
Icon size in `px`.

### System Icons

Use with `@workday/canvas-system-icons-web`.

```jsx
import { colors } from '@workday/canvas-kit-react-core'
import { SystemIcon } from '@workday/canvas-kit-react-icon'
import { activityStreamIcon } from '@workday/canvas-system-icons-web

<SystemIcon icon={activityStreamIcon} />
<SystemIcon icon={activityStreamIcon} color={colors.blueberry500} />
<SystemIcon
  icon={activityStreamIcon}
  accent={colors.frenchVanilla100}
  fill={colors.blueberry500}
  background={colors.blueberry500}
/>
<SystemIcon icon={activityStreamIcon} size={48} />
```

#### Properties

**Required**

**`icon`:** `CanvasIcon`  
Icon imported from `@workday/canvas-system-icons-web`

**Optional**

**`size`**  
Default: `24`  
Icon size in `px`.

**`color`**  
Default: `colors.primary.iconStandard`  
Icon color. This will define `accent` and `fill`. `accent` and `fill` will override this property if defined.

**`colorHover`**  
Default: `colors.primary.iconHover`  
Icon hover color. This will define `accentHover` and `fillHover`. `accentHover` and `fillHover` will override this property if defined.

**`accent`**  
`.wd-icon-accent` color.

**`accentHover`**  
`.wd-icon-accent` color on hover.

**`background`**  
Default: `'transparent'`  
`.wd-icon-background` color.

**`backgroundHover`**  
Default: `'transparent'`  
`.wd-icon-background` color on hover.

**`fill`**  
`.wd-icon-fill` color.

**`fillHover`**  
`.wd-icon-fill` color on hover.
