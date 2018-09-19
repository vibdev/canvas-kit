import * as React from 'react';
import {ButtonBaseCon} from './ButtonBase';
import styled from 'react-emotion';
import canvas from '@workday/canvas-kit-react-core';
import {ButtonTypes} from '..';

const IconButtonCon = styled(ButtonBaseCon)<{disabled?: boolean}>(
  // TODO: Support data-whatinput='input' css
  {
    borderRadius: '3px',
    width: '32px',
    height: '32px',
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  ({disabled}) => {
    return disabled
      ? {
          // Double parent selectors to ensure specificity to override original fill
          ['&& .wd-icon-fill, &&:hover .wd-icon-fill']: {fill: canvas.iconColors.disabled},
        }
      : {
          // Double parent selectors to ensure specificity to override original fill
          ['&& .wd-icon-fill, &&:hover .wd-icon-fill']: {fill: canvas.iconColors.standard},
        };
  }
);

export default class IconButton extends React.Component<JSX.IntrinsicElements['button']> {
  public render() {
    const {ref, ...elemPropsWithoutRef} = this.props;
    return (
      <IconButtonCon buttonType={ButtonTypes.Secondary!} innerRef={ref} {...elemPropsWithoutRef} />
    );
  }
}
