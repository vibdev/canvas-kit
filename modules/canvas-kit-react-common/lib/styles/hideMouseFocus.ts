import {CSSObject} from 'create-emotion';

/**
 * A utility to hide the default canvas style focus ring when using mouse input.
 * Requires wrapping your components in an InputProvider component.
 *
 * @returns {CSSObject} the css object for the focus ring style
 */
export default function hideMouseFocus(): CSSObject {
  return {
    [`[data-whatinput='mouse'] &:focus,
      [data-whatinput='touch'] &:focus,
      [data-whatinput='pointer'] &:focus`]: {
      outline: 'none',
      boxShadow: 'none',
      animation: 'none',
    },
  };
}
