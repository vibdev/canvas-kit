# Canvas Kit Icon

Components implementing Canvas accent, applet, and system icons.

## Usage

### Accent Icons

```jsx
import { colors } from '@workday/canvas-kit-react-core'
import { AccentIcon } from '@workday/canvas-kit-react-icon'

<AccentIcon name={AccentIcon.Icons.Shield} />
<AccentIcon name={AccentIcon.Icons.Shield} color={colors.pomegranate500} />
```

#### Properties

**Required**

**`name`**  
Name of the icon. Must be a member of the `AccentIcon.Icons` static enum.

**Optional**

**`color`**  
Default: `colors.blueberry500`  
Icon color.

### Applet Icons

```jsx
import { AppletIcon } from '@workday/canvas-kit-react-icon'

<AppletIcon name={AppletIcon.Icons.Benefits} />
<AppletIcon name={AppletIcon.Icons.Benefits} color={AppletIcon.Colors.Pomegranate} />
```

#### Properties

**Required**

**`name`**  
Name of the icon. Must be a member of the `AppletIcon.Icons` static enum.

**Optional**

**`color`**  
Default: `AppletIcon.Colors.Blueberry`  
Icon color. Must use a member of the `AppletIcon.Colors` enum.

### System Icons

```jsx
import { colors } from '@workday/canvas-kit-react-core'
import { SystemIcon } from '@workday/canvas-kit-react-icon'

<SystemIcon name={SystemIcon.Icons.ActivityStream} />
<SystemIcon name={SystemIcon.Icons.ActivityStream} color={colors.blueberry500} />
<SystemIcon
  name={SystemIcon.Icons.ActivityStream}
  accent={colors.frenchVanilla100}
  fill={colors.blueberry500}
  background={colors.blueberry500}
/>
```

#### Properties

**Required**

**`name`**  
Name of the icon. Must be a member of the `SystemIcon.Icons` static enum.

**Optional**

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
