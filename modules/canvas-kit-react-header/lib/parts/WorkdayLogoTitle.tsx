import * as React from 'react';
import styled from 'react-emotion';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import {wdayLogoWhite, wdayLogoBlue} from './_brand-assets'; // TODO: Replace with real SVGs from @workday/brand-assets
import {colors, spacing} from '@workday/canvas-kit-react-core';
import chroma from 'chroma-js';

export type WorkdayLogoTitleProps = {
  /**
   * A HeaderTheme enum indicating which theme to use (White, Blue or Transparent)
   */
  themeColor: HeaderTheme;
  /**
   * The title to display in the header. Not used if `brand` is provided
   */
  title: string;
};

const LockupContainer = styled('div')({
  display: 'inline-block',
});

const Lockup = styled('div')<WorkdayLogoTitleProps>({
  display: 'flex',
  alignItems: 'center',
  height: HeaderHeight.Large,
});

const Title = styled('h3')<WorkdayLogoTitleProps>(
  {
    fontSize: '20px',
    fontWeight: 400,
    paddingRight: spacing.l,
    'white-space': 'nowrap',
  },
  ({title, themeColor}) => ({
    display: title && title.length ? 'initial' : 'none',
    color: themeColor === HeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
  })
);

const WorkdayLogo = styled('span')<WorkdayLogoTitleProps>(
  {
    padding: `0 ${spacing.l}`,
  },
  ({themeColor, title}) => ({
    marginRight: title && title.length ? spacing.m : '0px',
    borderRight:
      title && title.length
        ? `1px solid ${
            themeColor === HeaderTheme.White
              ? colors.soap400
              : chroma(colors.soap400)
                  .alpha(0.4)
                  .css()
          }`
        : 'none',
  })
);

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    title: '',
  };

  render() {
    return (
      <LockupContainer>
        <Lockup {...this.props}>
          <WorkdayLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html: this.props.themeColor === HeaderTheme.White ? wdayLogoBlue : wdayLogoWhite,
            }}
          />
          <Title {...this.props}>{this.props.title}</Title>
        </Lockup>
      </LockupContainer>
    );
  }
}
