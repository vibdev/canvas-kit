# Canvas Kit Header

Component to create various types of headers for Workday applications and sites.

**Coming soon:**

- Product App Header
- Search Support
- Mobile Expanded Nav

## Header

The header component can be configured using the properties below. Each of it's direct children are
aligned to the right, with `<nav>` elements getting a special treatment.

### Properties

**`title` (required):** `string`  
Title displayed on the header next to the logo.

**`themeColor` (optional):** `HeaderTheme`  
Default: `HeaderTheme.White`

The theme of the header (White, Blue, or Transparent).

**`variant` (optional):** `HeaderVariant`  
Default: `HeaderVariant.Dub`

The variant of the header (Dub logo vs. Full logo) - this will impact the height of the header as
well (Full is taller).

**`brandUrl` (optional):** `string`  
Default: `'#'`

Link when clicking on the dub/title.

**`breakpoints` (optional):** `Object`  
Default:

```js
{
  sm: 320,
  md: 768,
  lg: 1120,
}
```

The breakpoints at which to collapse the contents of the nav.

**`brand` (optional):** `ReactNode`  
JSX that replaces the contents of the Dub logo and title. Used for replacing Dub + Title with a
`contained lockup` and/or for adding design elements next to the dub + title lockup.

**`onMenuClick` (optional):** `function`  
A function that accepts a `React.SyntheticEvent` for when the user clicks the mobile collapsed nav
icon.

**`centeredNav` (optional):** `boolean` A flag to center the nav in the middle of the header.

### Example

```jsx
import {Header HeaderTheme} from '@workday/canvas-kit-react-header';
import {Avatar} from '@workday/canvas-kit-react-avatar';
import {notificationsLargeIcon, inboxLargeIcon} from '@workday/canvas-system-icons-web';

<Header
  title="Kitchen Sink"
  themeColor={Header.Theme.Blue}
  brandUrl="#"
>
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
  <a href="#">
    <Avatar />
  </a>
  <Button>Sign Up</Button>
</Header>
```

### Variations

#### Small (Dub)

Small headers have a singular 'Dub' logo and a title at minimum, separated by a equivalent-height
divider. It is shorter in height (64px). This is the default behaviour, but it can be explicitly
indicated with `HeaderVariant.Dub`.

#### Large (Full)

Large headers have the full Workday logo and a title at minimum, separated by an equivalent-height
divider. It is taller in height (80px). Indicated with `HeaderVariant.Full`.

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
import canvas from '@workday/canvas-kit-react-core';

<Header
  title="This won't matter"
  brand={<WorkdayLogoTitle title="This title will show up instead" />}
/>;
```

---

For a full suite of examples, have a look at the [Header Stories](./stories.tsx).
