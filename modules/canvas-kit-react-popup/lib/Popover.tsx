import * as React from 'react';
import Card from '@workday/canvas-kit-react-card';
import styled from 'react-emotion';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {
  spacing,
  CanvasDepthValue,
  CanvasSpacingValue,
  colors,
} from '@workday/canvas-kit-react-core';
import {xIcon} from '@workday/canvas-system-icons-web';

export enum PopoverPadding {
  'zero',
  's',
  'l',
}

export interface PopoverProps {
  paddingSize: PopoverPadding;
  handleClose?: () => void;
  width?: number | string;
  heading?: React.ReactNode;
  depth?: CanvasDepthValue;
}

const closeIconSpacing = 8;

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
  public render() {
    const {handleClose, paddingSize, width, heading, depth, ...otherProps} = this.props;
    const popoverPadding = this.definePopoverPadding(paddingSize);
    return (
      <Container {...otherProps}>
        {handleClose ? (
          <CloseIconContainer>
            <SystemIcon onClick={handleClose} icon={xIcon} />
          </CloseIconContainer>
        ) : null}
        <Card depth={depth} heading={heading} width={width} padding={popoverPadding}>
          {this.props.children}
        </Card>
      </Container>
    );
  }

  private definePopoverPadding = (paddingSize: PopoverPadding) => {
    let popOverPadding: CanvasSpacingValue = spacing.zero;
    if (paddingSize === PopoverPadding.s) {
      popOverPadding = spacing.s;
    } else if (paddingSize === PopoverPadding.l) {
      popOverPadding = spacing.l;
    } else if (paddingSize === PopoverPadding.zero) {
      popOverPadding = spacing.zero;
    }
    return popOverPadding;
  };
}
