import * as React from 'react';
import {ButtonBaseLabel, ButtonIconLabel} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonTypes, ButtonSizes} from './types';
import {ButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';

export default class DropdownButton extends React.Component<ButtonProps> {
  public render() {
    const {buttonRef, ...elemProps} = this.props;

    const DropdownButtonCon = styled('button')<ButtonProps>(
      dropdownButtonStyles.styles,
      ({buttonType}) => {
        switch (buttonType) {
          case ButtonTypes.Primary:
            return dropdownButtonStyles.variants.types.primary;
          case ButtonTypes.Secondary:
          default:
            return dropdownButtonStyles.variants.types.secondary;
        }
      },
      ({buttonSize}) => {
        switch (buttonSize) {
          case ButtonSizes.Large:
          default:
            return dropdownButtonStyles.variants.sizes.large;
          case ButtonSizes.Medium:
            return dropdownButtonStyles.variants.sizes.medium;
        }
      }
    );

    return (
      <DropdownButtonCon {...this.props}>
        <ButtonBaseLabel>{elemProps.children}</ButtonBaseLabel>
        <ButtonIconLabel icon={caretDownIcon} {...this.props} buttonType={ButtonTypes.Dropdown} />
      </DropdownButtonCon>
    );
  }
}
