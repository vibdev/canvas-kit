# API & Pattern Guidelines

Note: This repo hasn't seen a full audit, so you may find examples that contradict these guidelines.


## Canvas:

- Ensure you're always using the Canvas primitives and enums wherever possible for things like:
  - Spacing (e.g. `canvas.spacing.s`)
  - Depth (e.g. `canvas.depth[2]`)
  - Type (e.g. `...canvas.type.h1`). Always start from a type hierarchy level and override if needed.
- Use the provided types (e.g. `CanvasSpacingValue`, `CanvasSpacingNumber`, etc.) to restrict prop values
  

## Naming:

#### Prop naming

- Prop names should never include the component name (e.g. `type`, not `buttonType`)
- Use the same props for the same concepts across components

#### T-shirt sizes

- Always use the shortest enumeration (`xs, s, m, l, xl`, etc.)
- **Do not** use longer versions (e.g. `sm`)

#### Theme types

- Default - normal state/color for use on light background
- Inverse - inverted colors for use on a dark background
- *Note:* If you encounter somewhere you need another theme type, please let us know so we can document it.

#### Event Handlers

- Always use standard `on<Event>`  naming (`onClick`, `onChange`, etc.)
- Only use a descriptor if there is already a handler for that type of event (e.g. `onChange`, `onValidColorChange`)

#### Enum naming

- Singular

- PascalCase

- Include component name unless it's a generic enum shared across components

- ```
  ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',
    Delete = 'delete',
  }
  ```

- Exclude component in default props:

  ```
  class Button extends React.Component<ButtonProps> {
    public static Type = ButtonType;
    public static Size = ButtonSize;
    ...
  }
  // Results in
  Button.Type.Primary
  ```

#### Ref naming

- When providing a ref, indicate what element it's tied to (generally by using the type of element if it's descriptive enough for your component). E.g. `inputRef`



## Patterns:

#### Event Handlers

- Use standard browser events wherever possible
- All event handlers should receive an event unless there's a good reason otherwise. This is for consumer predictability.

#### Grow Interface

- If your component needs to grow to fill to it's container, extend `GrowthInterface`
  (e.g. ```export interface MyComponentProps extends GrowthBehavior```)
- Then use the `grow` boolean prop in your styles to acheive the desired effect (e.g. `width: grow ? '100%' : undefined`)

#### Static Class Variables

- Expose enums you expect to be commonly used on the class to reduce imports.

  ```
  class Button extends React.Component<ButtonProps> {
    public static Type = ButtonType;
    public static Size = ButtonSize;
    ...
  }
  // Results in
  <Button type={Button.Type.Primary} />
  ```

- Ensure you leave out the component name for the static variable so it's not repeated (e.g. `Button.ButtonType.Primary`)

#### Input Provider

- All Canvas Kit components should support a wrapping `InputProvider` component to provide the cleanest experience for mouse users. Read the docs [here](https://ghe.megaleo.com/design/canvas-kit-react/tree/master/modules/canvas-kit-react-core#input-provider). 
- Make sure you provide fully accessible styling by default, and only override for mouse usage (see below).

```
[`[data-whatinput='mouse'] &:focus,
  [data-whatinput='touch'] &:focus,
  [data-whatinput='pointer'] &:focus`]: {
  outline: 'none',
  border: 'none',
},
```



### Prop spread behavior

- (extend base elem)
- When you spread props, you should know all the props you're spreading
- Only spread props on one component (or create a specific prop to spread (e.g. `inputProps`))



### Controlled components

- We opt for controlled components wherever possible.
- We aim to manage the least amount of state within our project as possible.
- Always stick with the default `value` and `onChange` if you can
- Deviate where it makes sense (e.g. `checked` and `onChange` for checkboxes).



### Accessibility

- Use aria labels where required
- Ensure full keyboard navigation
- Check whether tabbing is enough or whether other keyboard navigation is required (e.g. arrow keys)
- When in doubt, ask an expert!



### Child mapping

- We often add or augment props to React children within our components. Use `React.Children.map` along with `React.cloneElement()`
- Use `React.isValidElement()` if you want to make sure it's a React component and not a regular DOM node.
- If you're adding any event handlers, make sure you also support existing ones
- _**Note:** We should maybe add a helper for this?_



#### Logic Flow

- Ifs vs. Switch
- Nested Ternaries
- Using this.x in functions vs. passing in



## Code Style:

#### Default Props

- Any prop included in `defaultProps` should be typed as required in the component interface. However, it can still be documented as optional in the README.

#### Class Function Binding

- It used to be common to bind class functions in the constructor (i.e. `this.onChange = this.onChange.bind(this)`). 
- We recommend using an arrow function for your class function to avoid this
- Since we avoid state where possible, doing so often enables you to remove the constructor

#### Element Choice

- Use the correct native element wherever possible. This enables us to get as much behavior for free from the browser.
- For example, if something peforms an action on a click, it should generally use a `button` to get keypress handling for free.

#### Styled components

- Always initialize styled components outside of your render function. Failing to do this will result in a big performance hit.
- When specifying the props a styled component can accept, it is up to you do define how restrictive you should be. You can accept any prop that the component accepts (e.g. `styled('div')<ComponentProps>`) or only accept a subset (e.g. `styled('div')<Pick<ComponentProps, 'someProp' | 'anotherProp'>>`)
- We generally prefer the use of `styled` components over using the `css` function. However,  `css` can be handy for some basic styling.



- WD-C guide
- 
- 
- File Organization & Exports



## Documentation:

- Storybook structure (duplicative & referenceable)
- 

