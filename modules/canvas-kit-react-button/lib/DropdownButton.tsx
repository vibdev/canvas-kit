import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle, getButtonSize} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {ButtonTypes, ButtonSizes} from './types';

const DropdownButtonCon = styled('button')<ButtonProps>(
  dropdownButtonStyles.styles,
  ({buttonType}) => getButtonStyle(dropdownButtonStyles, buttonType),
  ({buttonSize}) => getButtonSize(dropdownButtonStyles, buttonSize)
);

export default class DropdownButton extends React.Component<ButtonProps> {
  public static Types = ButtonTypes;
  public static Sizes = ButtonSizes;

  static defaultProps = {
    buttonType: ButtonTypes.UdePrimary,
    buttonSize: ButtonSizes.Large,
  };

  public render() {
    const {children} = this.props;

    return (
      <DropdownButtonCon {...this.props}>
        <ButtonBaseLabel {...this.props}>{children}</ButtonBaseLabel>
        <ButtonLabelIcon icon={caretDownIcon} {...this.props} dropdown={true} />
      </DropdownButtonCon>
    );
  }
}
