import React from 'react';
import {ButtonBaseCon} from './ButtonBase';
import styled from 'react-emotion';
import canvas from '@workday/canvas-kit-react-core';
import {ButtonTypes} from './types';
import {ButtonProps} from './Button';

const IconButtonCon = styled(ButtonBaseCon)(
  // TODO: Support data-whatinput='input' css
  {
    borderRadius: '3px',
    width: '32px',
    height: '32px',
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    // Double parent selectors to ensure specificity to override original fill
    ['&&:disabled']: {
      '& .wd-icon-fill, &:hover .wd-icon-fill': {fill: canvas.iconColors.disabled},
    },
    ['&&:not([disabled])']: {
      '& .wd-icon-fill, &:hover .wd-icon-fill': {fill: canvas.iconColors.standard},
    },
  }
);

export default class IconButton extends React.Component<ButtonProps> {
  public render() {
    return <IconButtonCon buttonType={ButtonTypes.Secondary!} {...this.props} />;
  }
}
