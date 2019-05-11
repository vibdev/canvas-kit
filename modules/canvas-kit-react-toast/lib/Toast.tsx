import * as React from 'react';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';
import {spacing, colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {TextButton} from '@workday/canvas-kit-react-button';
import styled from 'react-emotion';

export interface ToastProps {
  icon?: CanvasSystemIcon;
  onClose?: () => void;
  onActionClick?: () => void;
  actionText?: string;
  iconColor?: Exclude<keyof typeof colors, 'gradients' | 'primary'>;
  transformOrigin?: TransformOrigin;
}
const toastWidth = 360;

const ToastContainer = styled('div')({
  width: toastWidth,
});

const ToastContentContainer = styled('div')({
  display: 'flex',
});

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: spacing.s,
});

const ActionButtonContainer = styled('div')({
  marginLeft: '-16px',
});

export default class Toast extends React.Component<ToastProps> {
  public static defaultProps = {
    icon: checkIcon as CanvasSystemIcon,
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
      <ToastContainer {...otherProps}>
        <Popup
          width={toastWidth}
          transformOrigin={transformOrigin}
          padding={PopupPadding.s}
          handleClose={onClose}
        >
          <ToastContentContainer>
            {icon && <ToastSystemIcon color={iconColor} colorHover={''} icon={icon} />}
            <div style={{marginRight: onClose ? spacing.m : 0}}>
              {this.props.children}
              {onActionClick && (
                <ActionButtonContainer>
                  <TextButton buttonSize={TextButton.Sizes.Small} onClick={onActionClick}>
                    {actionText}
                  </TextButton>
                </ActionButtonContainer>
              )}
            </div>
          </ToastContentContainer>
        </Popup>
      </ToastContainer>
    );
  }
}
