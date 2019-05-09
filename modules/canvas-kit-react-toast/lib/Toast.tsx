import * as React from 'react';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';
import {type, spacing} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import styled from 'react-emotion';

export interface ToastProps {
  handleClose?: () => void;
  handleActionLink?: () => void;
  actionLinkText?: string;
  toastIcon?: CanvasSystemIcon;
  iconColor?: string;
  transformOrigin?: TransformOrigin;
}
const toastWidth = 360;

const ToastContentContainer = styled('div')({
  display: 'flex',
});
const ToastContainer = styled('div')<Pick<ToastProps, 'handleClose'>>(
  {
    width: toastWidth,
  },
  ({handleClose}) => ({
    [`${ToastContentContainer}`]: {
      marginRight: handleClose ? spacing.m : 0,
    },
  })
);

const ToastIconContainer = styled('div')({
  marginRight: spacing.s,
});

const ActionLink = styled('a')({
  ...type.variant.link,
  display: 'flex',
  marginTop: spacing.xxxs,
});

export default class Toast extends React.Component<ToastProps> {
  public render() {
    const {
      handleClose,
      handleActionLink,
      actionLinkText,
      toastIcon,
      iconColor,
      transformOrigin,
      ...otherProps
    } = this.props;
    return (
      <ToastContainer {...otherProps} handleClose={handleClose}>
        <Popup transformOrigin={transformOrigin} padding={PopupPadding.s} handleClose={handleClose}>
          <ToastContentContainer>
            {toastIcon && (
              <ToastIconContainer>
                <SystemIcon color={iconColor} colorHover={''} icon={toastIcon} />
              </ToastIconContainer>
            )}
            <div>
              {this.props.children}
              {handleActionLink && (
                <ActionLink onClick={handleActionLink}>{actionLinkText}</ActionLink>
              )}
            </div>
          </ToastContentContainer>
        </Popup>
      </ToastContainer>
    );
  }
}
