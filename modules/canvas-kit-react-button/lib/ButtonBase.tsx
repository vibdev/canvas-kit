import styled, {keyframes} from 'react-emotion';
import {ButtonSizes, ButtonTypes, GrowthBehavior} from './types';
import canvas from '@workday/canvas-kit-react-core';
import {StyledOtherComponent} from 'create-emotion-styled';
import {CSSObject} from 'create-emotion';

export const BUTTON_HEIGHT_LARGE: number = 40;
export const BUTTON_HEIGHT_MEDIUM: number = 24;
export const BUTTON_HEIGHT_SMALL: number = 18;

/**
 * A utility to create a canvas style focus ring around your widget.
 * By default, this mixin will create a 1px focus ring tightly wrapped
 * to the widget (no whitespace).
 *
 * @param ringWidth       Allows the user to specify the thickness in px of the focus ring.
 * @param separationWidth Allows the user to define the width in px of the whitespace
 *                        that there should be between the widget and the focus ring.
 * @param animate         Set property to false to opt out of the standard grow out of the middle animation
 * @param inset           Determines whether or not the focus ring is inset
 *
 * @returns {CSSObject} the css object for the focus ring style
 */
export default function focusRing(
  ringWidth: number = 2,
  separationWidth: number = 0,
  animate: boolean = true,
  inset: boolean = false
): CSSObject {
  const endingInnerShadow =
    (inset ? 'inset ' : '') + '0 0 0 ' + separationWidth + 'px ' + canvas.colors.frenchVanilla100;
  const endingOuterShadow =
    (inset ? 'inset ' : '') +
    '0 0 0 ' +
    (ringWidth + separationWidth) +
    'px ' +
    canvas.commonColors.focusOutline;
  const endingBoxShadow = inset
    ? `${endingOuterShadow}`
    : `${endingInnerShadow}, ${endingOuterShadow}`;

  if (animate) {
    const fadeIn = keyframes({
      '0%': {boxShadow: endingBoxShadow},
      '100%': {boxShadow: endingBoxShadow},
    });

    return {animation: `${fadeIn} 100ms`, boxShadow: endingBoxShadow};
  }

  return {boxShadow: endingBoxShadow};
}

// TODO: Return type should be changed to object type of `buttonColors` once that gets a type added
function getButtonColors(
  buttonType: ButtonTypes
): {
  background: string;
  border: string;
  text: string;
  activeBackground: string;
  activeBorder: string;
  activeText: string;
  disabledBackground: string;
  disabledBorder: string;
  disabledText: string;
  focusBackground: string;
  focusBorder: string;
  focusText: string;
  hoverBackground: string;
  hoverBorder: string;
  hoverText: string;
} {
  switch (buttonType) {
    case ButtonTypes.Primary:
    default:
      return canvas.buttonColors.primary;
    case ButtonTypes.Secondary:
      return canvas.buttonColors.secondary;
    case ButtonTypes.Delete:
      return canvas.buttonColors.delete;
  }
}

export const ButtonBaseCon: StyledOtherComponent<
  {
    buttonType?: ButtonTypes;
    buttonSize?: ButtonSizes;
    disabled?: boolean;
    growthBehavior?: GrowthBehavior;
  },
  object,
  object
> = styled('button')<{
  buttonType?: ButtonTypes;
  buttonSize?: ButtonSizes;
  disabled?: boolean;
  growthBehavior?: GrowthBehavior;
}>(
  {
    boxSizing: 'border-box',
    display: 'inline-block',
    fontSize: '13px',
    borderRadius: '100px',
    border: '1px solid transparent',
    boxShadow: 'none',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 120ms ease-in',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:hover:active': {transitionDuration: '40ms'},
    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
  },
  ({disabled}) => {
    // TODO: Support data-whatinput='input'
    if (!disabled) {
      return {'&:focus, &:active': {...focusRing(1)}};
    } else {
      return {};
    }
  },
  ({buttonType}) => {
    if (buttonType !== undefined) {
      const buttonColors = getButtonColors(buttonType);

      return {
        backgroundColor: buttonColors.background,
        borderColor: buttonColors.border,
        color: buttonColors.text,
        ':active, :hover:active': {
          backgroundColor: buttonColors.activeBackground,
          borderColor: buttonColors.activeBorder,
          color: buttonColors.activeText,
        },
        ':focus, :hover:focus': {
          backgroundColor: buttonColors.focusBackground,
          borderColor: buttonColors.focusBorder,
          color: buttonColors.focusText,
        },
        ':hover': {
          backgroundColor: buttonColors.hoverBackground,
          borderColor: buttonColors.hoverBorder,
          color: buttonColors.hoverText,
        },
        ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
          backgroundColor: buttonColors.disabledBackground,
          borderColor: buttonColors.disabledBorder,
          color: buttonColors.disabledText,
        },
      };
    } else {
      return {};
    }
  },
  ({buttonType, buttonSize}) => {
    if (buttonSize === ButtonSizes.Large) {
      return {
        height: `${BUTTON_HEIGHT_LARGE}px`,
        padding: '0 32px',
        minWidth: '112px',
        maxWidth: '288px',
      };
    } else if (buttonSize === ButtonSizes.Medium) {
      return {
        height: `${BUTTON_HEIGHT_MEDIUM}px`,
        padding: '0 24px',
        minWidth: '80px',
        maxWidth: '200px',
      };
    } else if (buttonSize === ButtonSizes.Small) {
      return {
        height: `${BUTTON_HEIGHT_SMALL}px`,
        padding: '0 8px',
        minWidth: '56px',
        maxWidth: '120px',
      };
    } else {
      return {
        height: `${BUTTON_HEIGHT_LARGE}px`,
        padding: 0,
      };
    }
  },
  ({growthBehavior}) => {
    if (growthBehavior === GrowthBehavior.Stretch) {
      return {width: '100%', maxWidth: '100%'};
    }
    return {};
  }
);

export const ButtonBaseLabel: StyledOtherComponent<
  {buttonSize?: ButtonSizes},
  object,
  object
> = styled('span')<{buttonSize?: ButtonSizes}>(
  {
    position: 'relative', // Fixes an IE issue with text within button moving on click
    ':hover:active': {
      backgroundColor: 'transparent',
    },
  },
  ({buttonSize}) => {
    if (buttonSize === ButtonSizes.Medium) {
      return {
        fontSize: '13px',
        lineHeight: 1.54,
      };
    } else if (buttonSize === ButtonSizes.Small) {
      return {
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: 1.6,
      };
    } else {
      return {
        fontWeight: 500,
        fontSize: '14px',
      };
    }
  }
);
