import * as React from 'react';
import {ButtonBaseLabel, ButtonLabelIcon, getButtonStyle, getButtonSize} from './ButtonBase';
import styled from 'react-emotion';
import {ButtonTypes} from './types';
import {ButtonProps} from './Button';
import {dropdownButtonStyles} from './ButtonStyles';
import {caretDownIcon} from '@workday/canvas-system-icons-web';

export default class DropdownButton extends React.Component<ButtonProps> {
  public render() {
    const {children} = this.props;

    const DropdownButtonCon = styled('button')<ButtonProps>(
      dropdownButtonStyles.styles,
      ({buttonType}) => getButtonStyle(dropdownButtonStyles, buttonType!),
      ({buttonSize}) => getButtonSize(dropdownButtonStyles, buttonSize!)
    );

    return (
      <DropdownButtonCon {...this.props}>
        <ButtonBaseLabel {...this.props}>{children}</ButtonBaseLabel>
        <ButtonLabelIcon icon={caretDownIcon} {...this.props} buttonType={ButtonTypes.Dropdown} />
      </DropdownButtonCon>
    );
  }
}
