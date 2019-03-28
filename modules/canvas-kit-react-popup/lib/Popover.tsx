import * as React from 'react';
import Card from '@workday/canvas-kit-react-card';
import styled from 'react-emotion';
import {IconButton} from '@workday/canvas-kit-react-button';
import {spacing, CanvasDepthValue, colors} from '@workday/canvas-kit-react-core';
import {xIcon} from '@workday/canvas-system-icons-web';

export enum PopoverPadding {
  zero = spacing.zero,
  s = spacing.s,
  l = spacing.l,
}

export interface PopoverProps {
  padding?: PopoverPadding;
  handleClose?: () => void;
  width?: number | string;
  heading?: React.ReactNode;
  depth?: CanvasDepthValue;
}

const closeIconSpacing = 12;

const Container = styled('div')({
  position: 'relative',
  backgroundColor: colors.frenchVanilla100,
});
const CloseIconContainer = styled('div')({
  position: 'absolute',
  right: closeIconSpacing,
  cursor: 'pointer',
  top: closeIconSpacing,
});

export default class Popover extends React.Component<PopoverProps> {
  static PopoverPadding = PopoverPadding;
  static defaultProps = {
    padding: PopoverPadding.l,
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
