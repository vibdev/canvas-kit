import * as React from 'react';
import Card from '@workday/canvas-kit-react-card';
import styled from 'react-emotion';
import {IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {CanvasDepthValue, colors, spacing} from '@workday/canvas-kit-react-core';
import {TransformOrigin, getTranslateFromOrigin} from '@workday/canvas-kit-react-common';
import {xIcon} from '@workday/canvas-system-icons-web';
import {keyframes} from 'emotion';

export enum PopupPadding {
  zero = '0px',
  s = '16px',
  l = '32px',
}

export interface PopupProps {
  padding: PopupPadding;
  transformOrigin: TransformOrigin;
  closeIconSize: ButtonSizes.Small | ButtonSizes.Medium;
  handleClose?: () => void;
  width?: number | string;
  heading?: React.ReactNode;
  depth?: CanvasDepthValue;
}

const closeIconSpacing = spacing.xs;

const popupAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, spacing.xxs);

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(${translate.x}px, ${translate.y}px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;
};

const Container = styled('div')<Pick<PopupProps, 'transformOrigin'>>(
  {
    position: 'relative',
    backgroundColor: colors.frenchVanilla100,
  },
  ({transformOrigin}) => ({
    animation: popupAnimation(transformOrigin),
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${transformOrigin.vertical} ${transformOrigin.horizontal}`,
  })
);

const CloseIconContainer = styled('div')({
  position: 'absolute',
  right: closeIconSpacing,
  top: closeIconSpacing,
});

export default class Popup extends React.Component<PopupProps> {
  static padding = PopupPadding;
  static defaultProps = {
    padding: Popup.padding.l,
    closeIconSize: ButtonSizes.Medium,
    transformOrigin: {
      horizontal: 'center',
      vertical: 'top',
    },
  };

  public render() {
    const {
      handleClose,
      padding,
      width,
      heading,
      depth,
      closeIconSize,
      transformOrigin,
      ...otherProps
    } = this.props;
    return (
      <Container transformOrigin={transformOrigin} role="dialog" {...otherProps}>
        {handleClose && (
          <CloseIconContainer>
            <IconButton
              buttonType={IconButton.Types.Plain}
              buttonSize={closeIconSize}
              onClick={handleClose}
              icon={xIcon}
            />
          </CloseIconContainer>
        )}
        <Card depth={depth} heading={heading} width={width} padding={padding}>
          {this.props.children}
        </Card>
      </Container>
    );
  }
}
