import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {SystemIconProps} from '@workday/canvas-kit-react-icon/dist/commonjs/lib/SystemIcon';

export interface PageHeaderProps {
  title: string;
  marketing: boolean;
  // add breakpoints object for responsive
}

const Header = styled('header')({
  height: 84,
  backgroundImage: colors.gradients.blueberry,
  color: colors.frenchVanilla100,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

const Container = styled('div')<PageHeaderProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'hidden',
  },
  ({marketing}) => {
    if (marketing) {
      return {
        padding: '0 100px',
        boxSizing: 'border-box',
        margin: '0 auto',
        width: '100%',
        maxWidth: 1440,
        // TODO: add resposive stylings
      };
    } else {
      return {
        padding: `0 ${spacing.xl}`,
      };
    }
  }
);

const Title = styled('h2')({
  ...type.h1,
  color: colors.frenchVanilla100,
  padding: `${spacing.xs} 0`,
  margin: 0,
  'white-space': 'nowrap',
});

const IconList = styled('div')({
  display: 'flex',
  marginLeft: spacing.l,

  '> *:not(:last-child)': {
    marginRight: spacing.xxs,
  },
});

export default class PageHeader extends React.Component<PageHeaderProps> {
  static defaultProps = {
    title: '',
    marketing: false,
  };

  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.type === SystemIcon) {
        return React.cloneElement(child as React.ReactElement<SystemIconProps>, {
          color: colors.frenchVanilla100,
          colorHover: colors.blueberry200,
        });
      }

      return child;
    });
  }

  public render() {
    const {title, children} = this.props;

    return (
      <Header>
        <Container {...this.props}>
          <Title>{title}</Title>
          <IconList>{this.renderChildren(children)}</IconList>
        </Container>
      </Header>
    );
  }
}
