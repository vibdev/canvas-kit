# Canvas Kit Floating Action Toolbar

Full width toolbar fixed to bottom of screen.

## Usage

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-fat/index.scss';
```

## Floating Action Toolbar

The FAT consists of two components, `wdc-fat` and `wdc-fat-container`. All button sets should be
wrapped around `wdc-fat-container`.

> The primary action button should be left aligned followed by secondary buttons. The primary button
> is on the right only in task orchestration.

```html
<div class="wdc-fat">
  <div class="wdc-fat-container">
    <button class="wdc-btn wdc-btn-primary">Button</button>
    <button class="wdc-btn">Button</button>
    <button class="wdc-btn">Button</button>
  </div>
</div>
```

### Fixed Positioning

Use `.wdc-fat.wdc-fat-fixed` to fix the FAT to the bottom of the page.

```html
<div class="wdc-fat wdc-fat-fixed">
  <div class="wdc-fat-container">
    <button class="wdc-btn wdc-btn-primary">Button</button>
  </div>
</div>
```

### Responsive

At 575px, responsive styles will take effect:

- Applies a flex box to the buttons
- Makes single-button groups full width
- All buttons will become the same width (`flex: 1`).
- Button order will become reversed, making left-aligned primary buttons right-aligned.

> When on a mobile form factor, the button placement should flip to have the primary button on the
> far right.

```html
<div class="wdc-fat-container">
  <button class="wdc-btn wdc-btn-primary">Next</button>
  <button class="wdc-btn">Back</button>
</div>
```

#### Natural width buttons

In some cases, you may want some buttons to retain their natural width at smaller screen sizes. For
instance, the **related actions** button.

```html
<div class="wdc-fat">
	<div class="wdc-fat-container">
		<button class="wdc-btn wdc-btn-primary">Done</button>
		<button class="wdc-btn wdc-btn-icon-rounded wdc-fat-container-item-natural">
			<svg ...>
		</button>
	</div>
</div>
```
