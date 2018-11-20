# Canvas Kit Header

Component to create various types of headers for Workday applications and sites.

**Coming soon:**

- Product App Header
- Search Support
- Mobile Expanded Nav

## Header

The header component can be configured using the properties below. Each of it's direct children are
aligned to the right, with the following children getting a special treatment.

### Special Children

#### `<nav>, <ul>, <li>`

For a semantic navigation menu, this component will style a child `<nav>` element with an un-ordered
list inside (`<ul>`). This list can contain any number of `<li>` elements. You can visually
distinguish the link that your page is currently on by adding the class name: `"current"` to the
`<li>` element containing the current page link.

#### `<SystemIcon>`

The Header also looks for Canvas `<SystemIcon>` components and augments them with the correct
`color` and `colorHover` props so you won't have to worry about the contrast in relation to the
Header `themeColor`.

### A Note About Buttons

Please use `Primary` Canvas buttons for this component's call-to-action buttons (see the
[usage example](#usage) below).

### Properties

**`title` (optional):** `string`  
Default: `''`

The title displayed on the header next to the logo.

**Note**: this is optional but is _stylistically_ required if it is the `Dub` (default) variant.

**`themeColor` (optional):** `HeaderTheme`  
Default: `HeaderTheme.White`

The theme of the header (White, Blue, or Transparent).

**`variant` (optional):** `HeaderVariant`  
Default: `HeaderVariant.Dub`

The variant of the header (Dub logo vs. Full logo) - this will impact the height of the header as
well (Full is taller). See [Variations](#variations) for more details.

**`brandUrl` (optional):** `string`  
Default: `'#'`

The href attribute when clicking on the title logo.

**`brand` (optional):** `ReactNode`  
JSX that replaces the contents of the Dub logo and title. Used for replacing Dub + title with a
`contained lockup` and/or for adding design elements next to the Dub + title lockup.

**`breakpoints` (optional):** `Object`  
Default:

```js
{
  sm: 320,
  md: 768,
  lg: 1120,
}
```

The breakpoints at which to collapse the children of the header.

Special children collapse in this order:

- `<nav>` collapses into a hamburger icon menu after the screen width falls below the `lg`
  breakpoint
- Any `<SystemIcon>` collapses after the screen width falls below the `md` breakpoint

**`onMenuClick` (optional):** `function`  
A function that accepts a `React.SyntheticEvent` for when the user clicks the mobile collapsed nav
icon.

**`centeredNav` (optional):** `boolean` A flag to center the nav in the middle of the header.

### Usage

```jsx
import * as React from 'react';
import {Header} from '@workday/canvas-kit-react-header';
import {Avatar} from '@workday/canvas-kit-react-avatar';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {notificationsIcon} from '@workday/canvas-system-icons-web';
import {Button} from '@workday/canvas-kit-react-button';

<Header title="Blue Header" themeColor={Header.Theme.Blue} brandUrl="#">
  <nav>
    <ul>
      <li className="current">
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
  </nav>
  <a href="#">
    <SystemIcon icon={notificationsIcon} />
  </a>
  <Avatar
    onClick={() => {
      alert('clicked avatar');
    }}
  />
  <Button buttonType={Button.Types.Primary}>Sign Up</Button>
</Header>;
```

### Variations

#### Dub Variant (shorter)

"Dub" headers have a singular "Dub" logo and a title at minimum, separated by a equivalent-height
divider. It is shorter in height (64px). This is the default behaviour, but it can be explicitly
indicated with `HeaderVariant.Dub`.

#### Full Variant (taller)

"Full" headers have the full Workday logo and an optional title at minimum, separated by an
equivalent-height divider (when a title exists). It is taller in height (80px). Indicated with
`HeaderVariant.Full`.

#### Product

**Coming soon**

## Component Parts

### `<DubLogoTitle />`

A component that contains the lockup of the 'Dub' plus a title. This is used whenever you want to
override the contained lockup that comes default with a header or if you want to add more elements
next to the title with custom components or markup, or change the background color.

#### Properties

**`themeColor` (optional):** `HeaderTheme`

**`title` (optional):** `string`

**`bgColor` (optional):** `string`

#### Example

```jsx
import {Header, DubLogoTitle} from '@workday/canvas-kit-react-header';
import canvas from '@workday/canvas-kit-react-core';

<Header
  title="This won't matter"
  brand={
    <DubLogoTitle title="This title will show up instead" bgColor={canvas.colors.blueberry600} />
  }
/>;
```

### `<WorkdayLogoTitle />`

A component that contains the lockup of the full Workday logo plus a title. This is used whenever
you want to override the contained lockup that comes default with a header or if you want to add
more elements next to the title with custom components or markup.

#### Properties

**`themeColor` (optional):** `HeaderTheme`

**`title` (optional):** `string`

#### Example

```jsx
import {Header, WorkdayLogoTitle} from '@workday/canvas-kit-react-header';

<Header
  title="This won't matter"
  brand={<WorkdayLogoTitle title="This title will show up instead" />}
/>;
```

---

For a full suite of examples, have a look at the [Header Stories](./stories.tsx).
