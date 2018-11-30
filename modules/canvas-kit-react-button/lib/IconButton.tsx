import * as React from 'react';
import {ButtonBaseCon} from './ButtonBase';
import styled from 'react-emotion';
import canvas from '@workday/canvas-kit-react-core';
import {ButtonTypes} from './types';
import {ButtonProps} from './Button';
import {iconButtonStyles} from './ButtonStyles';

const IconButtonCon = styled(ButtonBaseCon)(iconButtonStyles.styles);

export default class IconButton extends React.Component<ButtonProps> {
  public render() {
    return <IconButtonCon buttonType={ButtonTypes.Secondary!} {...this.props} />;
  }
}
