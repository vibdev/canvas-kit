# Canvas Kit Page Header

A Canvas component for the header of a specific page in an application or site.

## Usage

### PageHeader

An HTML Element `<header>` with Canvas Page Header styling that renders a title and children
elements. This component will automatically adjust Canvas `<SystemIcon>` children to the correct
color.

```jsx
import { PageHeader } from '@workday/canvas-kit-react-page-header';
import { SystemIcon } from '@workday/canvas-kit-react-icon';
import { exportIcon, fullscreenIcon } from '@workday/canvas-system-icons-web';

<PageHeader title="Product">
  <a href="#">
    // No need to set the `color` or `colorHover` prop here, we'll do it for you
    <SystemIcon icon={exportIcon} />
  </a>
  <a href="#">
    <SystemIcon icon={fullscreenIcon} />
  </a>
</PageHeader>

<PageHeader title="Marketing" marketing={true}>
  <a href="#">
    <SystemIcon icon={exportIcon} />
  </a>
  <a href="#">
    <SystemIcon icon={fullscreenIcon} />
  </a>
</PageHeader>
```

#### Properties

**Optional**

**`title`**  
Type: `string`  
Default: `''`  
Title of the page header.

**`marketing`**  
Type: `boolean`  
Default: `false`  
Use header in the marketing context (non-product). In this context content is centered and header is
responsive in all three breakpoints.

**`breakpoints`**  
Type: `{ sm: number, md: number, lg: number }`  
Default: `{ sm: 768, md: 992, lg: 1200 }`  
An prop that specifies where each size's minimum window width begins for width-specific spacing
styles. For example, by default a mobile screen size would be from 0 to 767 pixels, a 'sm' screen is
from 768 to 991, a 'md' screen is from 992 to 1198 pixels, and a 'lg' screen is 1200 pixels and
beyond.

For a non-marketing (default) context, the Page Header only adjusts its spacing styles up until the
'sm' size breakpoint. In the `marketing` context, a Page Header adjusts for spacing in all sizes.
