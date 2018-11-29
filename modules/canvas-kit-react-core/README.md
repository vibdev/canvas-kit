# Canvas Kit Core

Canvas Kit Core contains values and base styles that are shared across the kit.

Includes:

- [Colors](#colors)
- [Spacing](#spacing)
- [Depth](#depth)
- [Type](#type)

## Colors

Workday Canvas Colors are directly exported from
[`@workday/canvas-colors-web`](https://ghe.megaleo.com/design/design-assets/tree/master/modules/canvas-colors-web).
Colors come in shades from 100 (lighter) - 600 (darker). These can be used directly, but
[semantic constants](#semantic-constants) are preferred.

Colors (100-600):

- Cinnamon
- Peach
- Chili Mango
- Cantaloupe
- Sour Lemon
- Juicy Pear
- Kiwi
- Green Apple
- Watermelon
- Jewel
- Toothpaste
- Blueberry
- Plum
- Berry Smoothie
- Blackberry
- Island Punch
- Grape Soda
- Pomegranate
- Fruit Punch
- Root Beer
- Toasted Marshmallow
- Coconut
- Cappuccino
- Soap
- Licorice
- French Vanilla
- Black Pepper

Example:

```js
import {colors} from '@workday/canvas-kit-react-core';
colors.blueberry400;
```

Each of the above colors have a gradient version as well

Example:

```js
import {colors} from '@workday/canvas-kit-react-core';
colors.gradients.blueberry;
```

### Semantic constants

To ensure consistency across implementations, our semantic constants should be used wherever
possible. This allows us to swap out the color of a button or icon for example, without having to
find every instance of it and change the color manually.

We have several semantic groupings:

- `commonColors`
- `buttonColors`
  - `delete`
  - `primary`
  - `secondary`
- `iconColors`
- `statusColors`
- `typeColors`

Example:

```js
import {iconColors} from '@workday/canvas-kit-react-core';
iconColors.hover;
```

## Spacing

Workday Canvas Spacing is directly exported from
[`@workday/canvas-spacing-web`](https://ghe.megaleo.com/design/design-assets/tree/master/modules/canvas-space-web).

Spacing variables in t-shirt size format. Spacing values are in `px` format.

| Variable | Size     |
| -------- | -------- |
| `xxxs`   | `'4px'`  |
| `xxs`    | `'8px'`  |
| `xs`     | `'12px'` |
| `s`      | `'16px'` |
| `m`      | `'24px'` |
| `l`      | `'32px'` |
| `xl`     | `'40px'` |
| `xxl`    | `'64px'` |
| `xxxl`   | `'80px'` |

Example:

```js
import {spacing} from '@workday/canvas-kit-react-core';
spacing.s;
```

### Type Checking

For the majority of your space based props, they should be using the Canvas spacing system
(multiples of 8 for the most part). You can lock down your props to only allow Canvas spacing values
(number or px value).

Use `CanvasSpacing` for the px values and `CanvasSpacingNumbers` to only allow numbers (if you're
doing lots of calculations and don't want to deal with stripping the `'px'` off.)

Example:

```js
import {CanvasSpacing} from '@workday/canvas-kit-react-core';

export interace MyComponent {
  spacing: CanvasSpacing
}
```

For medium spacing (24px):  
This **will allow** the spacing prop to have values of `spacing.m`, `'m'`, `'24px'`, or `24`  
But **will not allow** `spacing.foo`, `'foo'`, `'25px'`, `25`, etc.

## Depth

Five levels of depth are available. They are directly exported from
[`@workday/canvas-depth-web`](https://ghe.megaleo.com/design/design-assets/tree/master/modules/canvas-depth-web).

**Depth -1 (inset):** Inset card depth

**Depth 1:** Standard card depth

**Depth 2:** Increased card depth on hover

**Depth 3:** Active cards, popups

**Depth 4:** Cards on white backgrounds, menus

Example:

```js
import {depth} from '@workday/canvas-kit-react-core';
depth.inset;
depth['2'];
```

### Type Checking

Props that are used to adjust levels of depth should use `CanvasDepth` as the type to restrict it to
only take the levels of depth Canvas provides.

Example:

```js
import {CanvasDepth} from '@workday/canvas-kit-react-core';

export interace MyComponent {
  depth: CanvasDepth
}
```

This **will allow** the spacing prop to have values of `depth.inset`, `depth.['1']`, `'inset'`, `1`,
etc.  
But **will not allow** `spacing.foo`, `'foo'`, `'box-shadow: 0 1px 1px rgba(0,0,0,0.1)'`, `5`, etc.

## Type

Type styles are available as objects to use alone or with
[Emotion](https://github.com/emotion-js/emotion).

**Headings**  
Modifies font size and weight.

```tsx
<h1 style={canvas.type.h1}>H1 Header</h1>
<h2 style={canvas.type.h2}>H2 Header</h2>
<h3 style={canvas.type.h3}>H3 Header</h3>
<h4 style={canvas.type.h4}>H4 Header</h4>
<h5 style={canvas.type.h5}>H5 Header</h5>
```

**Body**

```tsx
<p style={canvas.type.body}>Body text</p>
<p style={canvas.type.body2}>Smaller body text</p>
```

**Small**

```tsx
<p style={canvas.type.small}>Smallest body text</p>
```

### Variations

You can modify any of the type hierarchy with the below variations:

**Label**

```tsx
<label className={css(canvas.type.body, canvas.type.variant.label)}>Label Text</label>
```

**Button**

```tsx
<span className={css(canvas.type.body, canvas.type.variant.button)}>Button Text</span>
```

**Caps**

```tsx
<span className={css(canvas.type.body, canvas.type.variant.caps)}>Caps Text</span>
```

**Hint**

```tsx
<span className={css(canvas.type.body, canvas.type.variant.hint)}>Hint Text</span>
```

**Error**

```tsx
<span className={css(canvas.type.body, canvas.type.variant.error)}>Error Text</span>
```

**Link**

```tsx
<a href="#" className={css(canvas.type.body, canvas.type.variant.link)}>
  Link Text
</a>
```

**Mono**

```tsx
<span className={css(canvas.type.body, canvas.type.variant.mono)}>Mono Text</span>
```

**Inverse**

```tsx
<span className={css(canvas.type.body, canvas.type.variant.inverse)}>Inverse Text</span>
```
