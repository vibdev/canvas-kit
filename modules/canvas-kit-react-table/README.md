# Canvas Kit Table

> A component for applying Canvas styling to table elements.

## Install

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-table
```

## Usage

Extends `<table>` with Canvas data table styling. Use with native `<thead>` and `<tbody>` elements
for respective styling.

Use [`<TableRow>`](#TableRow) component instead of `<tr>` to define rows.

```tsx
import {Table, TableRow} from '@workday/canvas-kit-react-table';

<Table>
  <thead>
    <TableRow header={true}>
      <th>ID</th>
      <th>Name</th>
    </TableRow>
  </thead>
  <tbody>
    <TableRow>
      <td>1</td>
      <td>Aidan Brown</td>
    </TableRow>
    <TableRow>
      <td>2</td>
      <td>Betty Chen</td>
    </TableRow>
  </tbody>
</Table>;
```

## Static Properties

> None

# TableRow

## Usage

Extends `<tr>` with row states and styling. Use with `<th>` and `<td>` elements.

```jsx
import { Table, TableRow } from '@workday/canvas-kit-react-table'

<Table>
  <thead>
    <TableRow header={true}>
      <th>ID</th>
      <th>Name</th>
    </TableRow>
  </thead>
  <tbody>
    <TableRow state={TableRow.State.Error}>
      <td>1</td>
      <td>Aidan Brown</td>
    </TableRow>
    <TableRow state={TableRow.State.Alert}>
      <td>2</td>
      <td>Betty Chen</td>
    </TableRow>
  </tbody>
</Table>
```

## Static Properties

#### `State: TableRowStates`

```tsx
<TableRow state={TableRow.State.Error}>
```

## Component Props

### Optional

#### `state: TableRowStates`

> The state of the row

Default: `null`

| Theme        | Description                              |
| ------------ | ---------------------------------------- |
| `Error`      | Red border, light red background         |
| `InputError` | Regular borders, light red background    |
| `Alert`      | Orange border, light orange background   |
| `InputAlert` | Regular borders, light orange background |
| `Hover`      | Grey background                          |
| `Selected`   | Blue border, light blue background       |

`InputError` and `InputAlert` are used for cases when the error is on the input-level rather than
the entire row. This style produces a colored row without a darkened border.

#### `header: boolean`

> Whether or not the row contains header elements. If true, special styling will be applied for
> header elements.

Default: `false`
