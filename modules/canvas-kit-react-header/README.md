# Canvas Kit Header (WIP)

Components that create various types of headers for Workday applications and sites.

**This component API is a work in progress and may not accurately represent the final version.**

## Small Header Usage

Small headers have a singular 'Dub' logo and a title at minimum, separated by a equivalent-height
divider. It is shorter in height (64px).

### Components

#### `<HeaderSection />`

```jsx
import {HeaderSection, HeaderIcon} from '@workday/canvas-kit-react-header';

<HeaderSection>
  <HeaderIcon icon={inboxLargeIcon} />
</HeaderSection>;
```

A component that wraps other header items and provides the correct spacing between them.

#### `<MenuItems />`

```jsx
import { HeaderSection, MenuItems } from '@workday/canvas-kit-react-header';

<HeaderSection>
  <MenuItems>
    <ul>
      <li><a href="#">Link 1</li>
      <li><a href="#">Link 2</li>
      <li><a href="#">Link 3</li>
    </ul>
  </MenuItems>
</HeaderSection>
```

A component that renders an unordered list of anchor links for navigation within the header.

#### `<HeaderIcon />`

```jsx
import {HeaderSection} from '@workday/canvas-kit-react-header';
import {inboxLargeIcon} from '@workday/canvas-system-icons-web';

<HeaderSection>
  <HeaderIcon icon={inboxIconLarge} />
</HeaderSection>;
```

A component that wraps a `<SystemIcon>` from `@workday/canvas-kit-react-icon` in order to conform to
a header theme.

##### Properties

**`icon` (required):** `CanvasSystemIcon`  
The name of the icon to display.

**`theme` (optional):** `HeaderThemeType`  
The header theme in which the icon lives in.

#### `<Avatar />`

```jsx
import {HeaderSection, Avatar} from '@workday/canvas-kit-react-header';

<HeaderSection>
  <Avatar />
</HeaderSection>;
```

A component that provides a default avatar for the header. **Component API is WIP**

#### `<DubLogoTitle />`

```jsx
import {
  HeaderSection,
  SmallHeader,
  DubLogoTitle,
  HeaderTheme,
} from '@workday/canvas-kit-react-header';
import canvas from '@workday/canvas-kit-react-core';

<SmallHeader
  title="This won't matter"
  brand={
    <DubLogoTitle
      title="This title will show up instead"
      theme={HeaderTheme.dark}
      bgColor={canvas.colors.blueberry600}
    />
  }
/>;
```

A component that contains the lockup of the 'Dub' plus a title. This is used whenever you want to
override the contained lockup that comes default with a header or if you want to add more elements
next to the title with custom components or markup.

##### Properties

**`title` (required):** `string`  
Title to appear next to the Dub.

**`bgColor` (optional):** `string`  
Title to appear next to the Dub.

**`theme` (optional):** `HeaderThemeType`  
Default: `HeaderTheme.light`  
The header theme in which the icon lives in.

#### `<SmallHeader />`

```jsx
import {SmallHeader, HeaderTheme} from '@workday/canvas-kit-react-header';

<SmallHeader title="Small Header (dark)" theme={HeaderTheme.dark} />;
```

##### Properties

**`title` (required):** `string`  
Title displayed on the header next to the logo.

**`opacity` (optional):** `number`  
Default: `1`  
Number from 0 to 1 that is the percentage opacity of the header background color.

**`dubUrl` (optional):** `string`  
Default: `'#'`  
Link when clicking on the dub/title.

**`brand` (optional):** `ReactNode`  
JSX that replaces the contents of the Dub logo and title. Used for replacing Dub + Title with a `contained lockup`
and/or for adding design elements next to the dub + title lockup (e.g. a search bar).

**`theme` (optional):** `HeaderThemeType`  
String constant that determines the theme of the header. It's either `'light'` or `'dark'`, use the `HeaderTheme`
enum export when referencing these constants.  
Default: `HeaderTheme.light`

### Small Header Full Example

```jsx
import {
  SmallHeader,
  HeaderSection,
  MenuItems,
  HeaderIcon,
  Avatar,
  HeaderTheme,
} from '@workday/canvas-kit-react-header';
import {notificationsLargeIcon, inboxLargeIcon} from '@workday/canvas-system-icons-web';

<SmallHeader title="Dark Theme" theme={HeaderTheme.dark}>
  <HeaderSection>
    <MenuItems>
      <ul>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Library</a>
        </li>
        <li>
          <a href="#">Create</a>
        </li>
        <li>
          <a href="#">Manage</a>
        </li>
      </ul>
    </MenuItems>
  </HeaderSection>
  <HeaderSection>
    <a href="#">
      <HeaderIcon icon={notificationsLargeIcon} theme={HeaderTheme.dark} />
    </a>
  </HeaderSection>
  <HeaderSection>
    <a href="#">
      <HeaderIcon icon={inboxLargeIcon} theme={HeaderTheme.dark} />
    </a>
  </HeaderSection>
  <HeaderSection last={true}>
    <a href="#">
      <Avatar />
    </a>
  </HeaderSection>
</SmallHeader>;
```

### Large

Large headers (`<LargeHeader>`) have the full Workday logo and a title at minimum, separated by a
equivalent-height divider. It is taller in height (80px).

### Product

Product headers (`<ProductHeader>`) have a 'Dub' logo without a title separated by a full-height
divider. It is shorter in height (64px).
