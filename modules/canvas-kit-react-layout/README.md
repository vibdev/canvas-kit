# Canvas Kit Layout

The layout component is used to create layouts for your application. The component comes with the
`Layout` and `Column` component. Layout and Columns can be utilized to create a combination of
different workday specific layouts. Layouts should be used to create the main layout on the page.

# Layout

> Layout Container

## Usage

```tsx
import {Layout} from '@workday/canvas-kit-react-layout';

<Layout>...</Layout>;
```

## Static Properties

#### `Column: ReactNode`

## Component Props

#### `spacing: Canvas Spacing`

> The spacing around columns

#### `gutter: Canvas Spacing`

> The padding of the outside container

# Column

> 12 column grid layout

```tsx
import {Layout} from '@workday/canvas-kit-react-layout';

<Layout>
  <Layout.Column>...</Layout.Column>
</Layout>;
```

## Component Props

#### `width: Canvas Spacing`

> The width of the columns

#### `spacing: Canvas Sizing`

> The left and right padding for the column (inherits from Layout prop)

#### `content: boolean`

> If the column includes content padding
