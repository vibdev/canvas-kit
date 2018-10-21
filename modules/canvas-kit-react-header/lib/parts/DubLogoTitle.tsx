import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import * as chroma from 'chroma-js';
import {dubLogoWhite, dubLogoBlue} from './_brand-assets';

export type DubTitleProps = {
  themeColor: HeaderTheme;
  title: string;
  bgColor?: string;
};

const LockupContainer = styled('div')({
  display: 'inline-block',
});

const Lockup = styled('div')<DubTitleProps>(
  {
    display: 'flex',
    alignItems: 'center',
    height: HeaderHeight.Small,
  },
  ({bgColor}) => ({
    background: bgColor ? bgColor : 'none',
  })
);

const Title = styled('h3')<DubTitleProps>(
  {
    display: 'inline-block',
    fontSize: '20px',
    fontWeight: 400,
    paddingRight: spacing.l,
    'white-space': 'nowrap',
  },
  ({themeColor}) => ({
    color: themeColor === HeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
  })
);

const DubLogo = styled('span')<DubTitleProps>(
  {
    padding: `0 ${spacing.s}`,
    marginRight: spacing.s,
  },
  ({themeColor}) => ({
    borderRight: `1px solid ${
      themeColor === HeaderTheme.White
        ? colors.soap400
        : chroma(colors.frenchVanilla100)
            .alpha(0.3)
            .css()
    }`,
  })
);

export class DubLogoTitle extends React.Component<DubTitleProps> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
  };

  render() {
    return (
      <LockupContainer>
        <Lockup {...this.props}>
          <DubLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html: this.props.themeColor === HeaderTheme.White ? dubLogoBlue : dubLogoWhite,
            }}
          />
          <Title {...this.props}>{this.props.title}</Title>
        </Lockup>
      </LockupContainer>
    );
  }
}
