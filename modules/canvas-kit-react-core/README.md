# Canvas Kit Core

Canvas Kit Core contains values and base styles that are shared across the kit.

Includes:

- [Colors](#colors)
- [Spacing](#spacing)
- [Depth](#depth)
- [Type](#type)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-core
```

# Colors

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

## Usage

```tsx
import {colors} from '@workday/canvas-kit-react-core';

colors.blueberry400;
```

> Each of the colors have a gradient version as well

```tsx
import {colors} from '@workday/canvas-kit-react-core';

colors.gradients.blueberry;
```

## Semantic constants

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

```tsx
import {iconColors} from '@workday/canvas-kit-react-core';

iconColors.hover;
```

# Spacing

Workday Canvas Spacing is directly exported from
[`@workday/canvas-spacing-web`](https://ghe.megaleo.com/design/design-assets/tree/master/modules/canvas-space-web).

Spacing variables are in a "t-shirt size" format. Spacing values are in `px` format (`spacing`) or
number format (`spacingNumbers`).

| Variable | Size (px) | Size (number) |
| -------- | --------- | ------------- |
| `xxxs`   | `'4px'`   | `4`           |
| `xxs`    | `'8px'`   | `8`           |
| `xs`     | `'12px'`  | `12`          |
| `s`      | `'16px'`  | `16`          |
| `m`      | `'24px'`  | `24`          |
| `l`      | `'32px'`  | `32`          |
| `xl`     | `'40px'`  | `40`          |
| `xxl`    | `'64px'`  | `64`          |
| `xxxl`   | `'80px'`  | `80`          |

## Usage

```tsx
import {spacing, spacingNumbers} from '@workday/canvas-kit-react-core';

spacing.s; // 16px
spacingNumbers.s; // 16
```

# Depth

Five levels of depth are available. They are directly exported from
[`@workday/canvas-depth-web`](https://ghe.megaleo.com/design/design-assets/tree/master/modules/canvas-depth-web).

| Level            | Usage Recommendations             |
| ---------------- | --------------------------------- |
| Depth -1 (inset) | Inset card depth                  |
| Depth 1          | Standard card depth               |
| Depth 2          | Increased card depth on hover     |
| Depth 3          | Active cards, popups              |
| Depth 4          | Cards on white backgrounds, menus |

## Usage

```tsx
import {depth} from '@workday/canvas-kit-react-core';

depth.inset;
depth['2'];
```

# Type

Type styles are available as objects to use alone or with
[Emotion](https://github.com/emotion-js/emotion).

## Usage

```tsx
import {type} from '@workday/canvas-kit-react-core';
```

### Headings

> Modifies font size and weight.

```tsx
<h1 style={canvas.type.h1}>H1 Header</h1>
<h2 style={canvas.type.h2}>H2 Header</h2>
<h3 style={canvas.type.h3}>H3 Header</h3>
<h4 style={canvas.type.h4}>H4 Header</h4>
<h5 style={canvas.type.h5}>H5 Header</h5>
```

### Body

```tsx
<p style={canvas.type.body}>Body text</p>
<p style={canvas.type.body2}>Smaller body text</p>
```

### Small

```tsx
<p style={canvas.type.small}>Smallest body text</p>
```

### Variations

> You can modify any of the type hierarchy with the below variations:

#### Labels

```tsx
<label className={css(canvas.type.body, canvas.type.variant.label)}>Label Text</label>
```

#### Buttons

```tsx
<span className={css(canvas.type.body, canvas.type.variant.button)}>Button Text</span>
```

#### Caps

```tsx
<span className={css(canvas.type.body, canvas.type.variant.caps)}>Caps Text</span>
```

#### Hint

```tsx
<span className={css(canvas.type.body, canvas.type.variant.hint)}>Hint Text</span>
```

#### Error

```tsx
<span className={css(canvas.type.body, canvas.type.variant.error)}>Error Text</span>
```

#### Link

```tsx
<a href="#" className={css(canvas.type.body, canvas.type.variant.link)}>
  Link Text
</a>
```

#### Mono

```tsx
<span className={css(canvas.type.body, canvas.type.variant.mono)}>Mono Text</span>
```

#### Inverse

```tsx
<span className={css(canvas.type.body, canvas.type.variant.inverse)}>Inverse Text</span>
```
