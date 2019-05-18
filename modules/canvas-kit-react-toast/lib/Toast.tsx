import * as React from 'react';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';
import {spacing, colors, CanvasColor} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {TextButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import styled from 'react-emotion';

export interface ToastProps {
  icon: CanvasSystemIcon;
  iconColor: CanvasColor | string; // TODO: Fix
  children: string;
  onClose?: () => void;
  onActionClick?: () => void;
  actionText?: string;
  transformOrigin?: TransformOrigin;
}
const toastWidth = 360;

const ToastContainer = styled(Popup)({
  width: toastWidth,
});

const ToastContentContainer = styled('div')<Pick<ToastProps, 'onClose'>>(
  {
    display: 'flex',
    alignItems: 'center',
  },
  ({onClose}) => ({
    marginRight: onClose ? spacing.m : undefined,
  })
);

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: spacing.s,
  alignSelf: 'start',
});

const ActionButton = styled(TextButton)({
  display: 'block',
});

export default class Toast extends React.Component<ToastProps> {
  static defaultProps = {
    icon: checkIcon,
    iconColor: colors.greenApple400,
  };

  public render() {
    const {
      onClose,
      onActionClick,
      actionText,
      icon,
      iconColor,
      transformOrigin,
      ...otherProps
    } = this.props;
    return (
      <ToastContainer
        width={toastWidth}
        transformOrigin={transformOrigin}
        padding={PopupPadding.s}
        handleClose={onClose}
        closeIconSize={ButtonSizes.Small}
        {...otherProps}
      >
        <ToastContentContainer onClose={onClose}>
          {icon && <ToastSystemIcon color={iconColor} colorHover={''} icon={icon} />}
          <div>
            {this.props.children}
            {onActionClick && (
              <ActionButton buttonSize={TextButton.Sizes.Small} onClick={onActionClick}>
                {actionText}
              </ActionButton>
            )}
          </div>
        </ToastContentContainer>
      </ToastContainer>
    );
  }
}
