import * as React from 'react';
import Card from '@workday/canvas-kit-react-card';
import styled from 'react-emotion';
import {IconButton} from '@workday/canvas-kit-react-button';
import {CanvasDepthValue, colors} from '@workday/canvas-kit-react-core';
import {xIcon} from '@workday/canvas-system-icons-web';
import {keyframes} from 'emotion';

export enum PopupPadding {
  zero = '0px',
  s = '16px',
  l = '32px',
}

export interface PopoupOrigin {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}

export interface PopupProps {
  padding?: PopupPadding;
  handleClose?: () => void;
  width?: number | string;
  heading?: React.ReactNode;
  depth?: CanvasDepthValue;
  transformOrigin?: string | number | (string | number)[] | undefined;
  transform?: string | string[] | undefined;
}

const closeIconSpacing = 12;

const popupAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const Container = styled('div')<Pick<PopupProps, 'transformOrigin' | 'transform'>>(
  {
    position: 'relative',
    backgroundColor: colors.frenchVanilla100,
    animation: popupAnimation,
    animationDuration: '250ms',
    animationTimingFunction: 'ease-out',
  },
  ({transformOrigin, transform}) => ({
    transform: transform ? transform : '',
    transformOrigin: transformOrigin ? transformOrigin : 'center',
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
  };
  public render() {
    const {handleClose, padding, width, heading, depth, ...otherProps} = this.props;
    return (
      <Container {...otherProps}>
        {handleClose && (
          <CloseIconContainer>
            <IconButton buttonType={IconButton.Types.Plain} onClick={handleClose} icon={xIcon} />
          </CloseIconContainer>
        )}
        <Card depth={depth} heading={heading} width={width} padding={padding}>
          {this.props.children}
        </Card>
      </Container>
    );
  }
}
