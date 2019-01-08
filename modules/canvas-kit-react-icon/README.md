# Canvas Kit Icon

Components assisting the rendering of Canvas accent, applet, and system icons.

Icon packages from [Design Assets](https://ghe.megaleo.com/design/design-assets) must be used with
these components. No icons are bundled with this package.

## Install

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-icon
```

## Icon Packages

When using an icon package, you have the option of using named exports or using an individual icon
module. If using named exports, you should ensure that you have configured
[tree shaking](https://webpack.js.org/guides/tree-shaking/) correctly to prevent bundle bloat.

```tsx
# Named Export
import { shieldIcon } from '@workday/canvas-accent-icons-web'
<AccentIcon icon={shieldIcon} />

import * as AccentIcons from '@workday/canvas-accent-icons-web'
<AccentIcon icon={AccentIcons.shieldIcon} />

# Module Import
import shieldIcon from '@workday/canvas-accent-icons-web/dist/es6/shield'
<AccentIcon icon={shieldIcon} />
```

# Accent Icons

## Usage

Use with `@workday/canvas-accent-icons-web`.

```tsx
import { colors } from '@workday/canvas-kit-react-core'
import { AccentIcon } from '@workday/canvas-kit-react-icon'
import { shieldIcon } from '@workday/canvas-accent-icons-web'

<AccentIcon icon={shieldIcon} />
<AccentIcon icon={shieldIcon} color={colors.pomegranate500} />
<AccentIcon icon={shieldIcon} size={80} />
```

## Static Properties

> None

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-accent-icons-web`.

### Optional

#### `color: string`

> Icon color from `@workday/canvas-colors-web`.

Default: `colors.blueberry500`

#### `size: number`

> Size of the icon.

Default: `56`

#### `transparent: boolean`

> Toggle for transparent accent icon background. If false, the background fill will be white.

Default: `false`

# Applet Icons

## Usage

Use with `@workday/canvas-applet-icons-web`.

```tsx
import { AppletIcon } from '@workday/canvas-kit-react-icon'
import { benefitsIcon } from '@workday/canvas-applet-icons-web'

<AppletIcon icon={benefitsIcon} />
<AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
<AppletIcon icon={benefitsIcon} size={60} />
```

## Static Properties

#### `Colors: BrandingColors`

```tsx
<AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
```

- `Cinnamon`
- `Peach`
- `ChiliMango`
- `Cantaloupe`
- `SourLemon`
- `JuicyPear`
- `Kiwi`
- `GreenApple`
- `Watermelon`
- `Jewel`
- `Toothpaste`
- `Blueberry`
- `Plum`
- `BerrySmoothie`
- `Blackberry`
- `IslandPunch`
- `GrapeSoda`
- `Pomegranate`
- `FruitPunch`
- `RootBeer`
- `ToastedMarshmallow`
- `Cappuccino`
- `Licorice`
- `BlackPepper`

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-applet-icons-web`.

### Optional

#### `color: BrandingColors`

> Icon color.

Default: `AppletIcon.Colors.Blueberry`

#### `size: number`

> Size of the icon in `px`.

Default: `92`

# System Icons

## Usage

Use with `@workday/canvas-system-icons-web`.

```tsx
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

## Static Properties

> None

## Component Props

### Required

#### `icon: CanvasIcon`

> Icon to display from `@workday/canvas-system-icons-web`

### Optional

#### `size: number`

> Size of the icon in `px`.

Default: `24`

#### `color: string`\*\*

> Color of the icon. This will define `accent` and `fill`.

Default: `colors.primary.iconStandard`

#### `colorHover: string`

> Hover color of the icon. This will define `accentHover` and `fillHover`.

Default: `colors.primary.iconHover`

#### `accent: string`

> `.wd-icon-accent` color. This will override `color`.

Default: `undefined`

#### `accentHover: string`

> `.wd-icon-accent` color on hover. This will override `colorHover`.

Default: `undefined`

#### `background: string`

> `.wd-icon-background` color.

Default: `'transparent'`

#### `backgroundHover: string`

> `.wd-icon-background` color on hover.

Default: `'transparent'`

#### `fill: string`

> `.wd-icon-fill` color. This will override `color`.

Default: `undefined`

#### `fillHover: string`

> `.wd-icon-fill` color on hover. This will override `colorHover`.

Default: `undefined`

# Graphics

## Usage

Use with `@workday/canvas-graphics-web`.

```tsx
import { colors } from '@workday/canvas-kit-react-core'
import { Graphic } from '@workday/canvas-kit-react-icon'
import { badgeAchievementGraphic } from '@workday/canvas-graphics-web

<Graphic src={badgeAchievementGraphic} />
<Graphic src={badgeAchievementGraphic} width={80}/>
<Graphic src={badgeAchievementGraphic} height={80}/>
<Graphic src={badgeAchievementGraphic} grow={true} />
```

## Static Properties

> None

## Component Props

### Required

#### `src: CanvasGraphic`

> Graphic to display from `@workday/canvas-graphics-web`

### Optional

#### `width: number | string`

> Graphic width in `px`. `width` takes precedence over `height` in order to preserve the graphic's
> ratio.

Default: `width of graphic`

#### `height: number | string`

> Graphic height in `px`. If set, `width` will be set to `100%`.

Default: `height of graphic`

#### `grow: boolean`

> Expand graphic to fit container.

Default: `false`
