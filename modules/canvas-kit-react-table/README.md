# Canvas Kit Table

Components implementing Canvas data table styling.

Refer to
[canvas-kit-css-table](https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-css-table)
for additional details.

## Usage

**This package uses CSS.**  
If you're using webpack, you must enable a CSS loader.

### Table

Extends `<table>` with Canvas data table styling. Use with native `<thead>` and `<tbody>` elements
for respective styling.

Use [`<TableRow>`](#TableRow) component instead of `<tr>` to define rows.

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
    <TableRow>
      <td>1</td>
      <td>Aidan Brown</td>
    </TableRow>
    <TableRow>
      <td>2</td>
      <td>Betty Chen</td>
    </TableRow>
  </tbody>
</Table>
```

### TableRow

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
    <TableRow state={TableRow.States.Error}>
      <td>1</td>
      <td>Aidan Brown</td>
    </TableRow>
    <TableRow state={TableRow.States.Alert}>
      <td>2</td>
      <td>Betty Chen</td>
    </TableRow>
  </tbody>
</Table>
```

#### Properties

**Optional**

**`state`**  
Type: `TableRowStates.States = { Error, Alert, InputError, InputAlert, Hover, Selected }`  
Default: `null`  
Button state.

**`header`** Type: `boolean` Default: `false` Whether or not the row contains header elements.

> `InputError` and `InputAlert` are used for cases when the error is on the input-level rather than
> the entire row. This style produces a colored row without a darkened border.
