import * as React from 'react';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';
import {spacing, colors, type, CanvasColor} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {ButtonSizes} from '@workday/canvas-kit-react-button';
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

const ActionButton = styled('button')({
  display: 'block',
  border: 'none',
  padding: 0,
  marginTop: spacing.xxxs,
  ...type.body2,
  ...type.variant.link,
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
      <Popup
        width={toastWidth}
        transformOrigin={transformOrigin}
        padding={PopupPadding.s}
        handleClose={onClose}
        closeIconSize={ButtonSizes.Small}
        {...otherProps}
      >
        <ToastContentContainer onClose={onClose}>
          {icon && <ToastSystemIcon color={iconColor} colorHover={iconColor} icon={icon} />}
          <div>
            {this.props.children}
            {onActionClick && <ActionButton onClick={onActionClick}>{actionText}</ActionButton>}
          </div>
        </ToastContentContainer>
      </Popup>
    );
  }
}
