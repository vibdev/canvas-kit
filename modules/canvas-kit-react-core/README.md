# Canvas Kit Core

## Type

Type styles are available as objects to use alone or with [Emotion](https://github.com/emotion-js/emotion).

**Headings**  
Modifies font size and weight.

```jsx
<h1 style={canvas.type.h1}>H1 Header</h1>
<h2 style={canvas.type.h2}>H2 Header</h2>
<h3 style={canvas.type.h3}>H3 Header</h3>
<h4 style={canvas.type.h4}>H4 Header</h4>
<h5 style={canvas.type.h5}>H5 Header</h5>
```

**Body**

```jsx
<p style={canvas.type.body}>Body text</p>
<p style={canvas.type.body2}>Smaller body text</p>
```

**Small**

```jsx
<p style={canvas.type.small}>Smallest body text</p>
```

### Variations

You can modify any of the type hierarchy with the below variations:

**Label**

```jsx
<label className={css({ ...canvas.type.body, ...canvas.type.label })}>Label Text</label>
```

**Button**

```jsx
<span className={css({ ...canvas.type.body, ...canvas.type.button })}>Button Text</span>
```

**Caps**

```jsx
<span className={css({ ...canvas.type.body, ...canvas.type.caps })}>Caps Text</span>
```

**Hint**

```jsx
<span className={css({ ...canvas.type.body, ...canvas.type.hint })}>Hint Text</span>
```

**Error**

```jsx
<span className={css({ ...canvas.type.body, ...canvas.type.error })}>Error Text</span>
```

**Link**

```jsx
<a href="#" className={css({ ...canvas.type.body, ...canvas.type.link })}>
  Link Text
</a>
```

**Mono**

```jsx
<span className={css({ ...canvas.type.body, ...canvas.type.mono })}>Mono Text</span>
```

**Inverse**

```jsx
<span className={css({ ...canvas.type.body, ...canvas.type.inverse })}>Inverse Text</span>
```
