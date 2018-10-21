import * as React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import {type, spacing} from '@workday/canvas-kit-react-core';
import {DubLogoTitle, WorkdayLogoTitle} from './parts';
import {themes} from './shared/themes';
import {HeaderTheme, HeaderVariant} from './shared/types';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {justifyIcon} from '@workday/canvas-system-icons-web';
import {SystemIconProps} from '@workday/canvas-kit-react-icon/dist/types/lib/SystemIcon';
import {throttle} from 'lodash';

export enum HeaderHeight {
  Small = '64px',
  Large = '80px',
}

export interface HeaderProps {
  themeColor: HeaderTheme;
  variant: HeaderVariant;
  title?: string;
  brand?: React.ReactNode;
  brandUrl?: string;
  centeredNav?: boolean;
  handleMenuClick?: (e: React.SyntheticEvent) => void;
  breakpoints: {
    [key: string]: number;
    sm: number;
    md: number;
    lg: number;
  };
}

export interface HeaderState {
  screenSize: keyof HeaderProps['breakpoints'];
}

const makeMq = (breakpoints: HeaderProps['breakpoints']) => {
  const mq: {[key: string]: string} = {};

  Object.keys(breakpoints).forEach(key => {
    mq[key] = `@media (min-width: ${breakpoints[key]}px)`;
  });

  return mq;
};
const HeaderShell = styled('div')<HeaderProps>(
  {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    ...type.body,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  ({variant, themeColor}) => ({
    height: variant === HeaderVariant.Dub ? HeaderHeight.Small : HeaderHeight.Large,
    background: themes[themeColor].background,
    ...themes[themeColor].depth,
    color: themes[themeColor].color,
  })
);

const BrandSlot = styled('div')(
  {
    height: '100%',
  },
  (props: {grow?: boolean}) => ({
    flexGrow: props.grow ? 'unset' : 1,
  })
);

const BrandLink = styled('a')({
  ...type.link,

  '&:hover': {
    textDecoration: 'none',
  },

  '&:focus': {
    textDecoration: 'none',
  },
});

const navStyle = (props: HeaderProps) => {
  const theme = themes[props.themeColor];

  return css({
    nav: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      height: 'inherit',

      '& ul': {
        color: theme.linkColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        height: 'inherit',

        '& li': {
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          margin: `0 ${spacing.xxxs}`,
          fontSize: '14px',
          fontWeight: 700,
          height: 'inherit',
        },
        '& li:first-child': {
          marginLeft: 0,
        },
        '& li:last-child': {
          marginRight: 0,
        },

        '& li a': {
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          color: 'inherit',
          textDecoration: 'none',
          height: 'inherit',
          padding: `0px ${spacing.s}`,
          transition: `color 150ms ease-out 0s`,
        },
        '& li.current:after': {
          position: 'absolute',
          bottom: 0,
          content: `''`,
          height: 4,
          width: '100%',
          backgroundColor: theme.chipColor,
          borderRadius: '3px 3px 0 0',
        },
        '& li.current a': {
          color: theme.currentLinkColor,
        },
        '& li.current a:hover, & li.current a:active': {
          color: theme.currentLinkColor,
        },
        '& li a:hover, & li a:active': {
          color: theme.linkColor,
        },
      },
      '& ul:hover': {
        color: theme.linkFadeOutColor,
      },
    },
  });
};

const ChildrenSlot = styled('div')<HeaderProps>(({centeredNav = false, variant, breakpoints}) => {
  const mq = makeMq(breakpoints);

  return {
    marginRight: variant === HeaderVariant.Dub ? spacing.s : spacing.l,
    '> *': {
      marginRight: 0,
    },

    // TODO: remove this when we get real icon buttons
    '> .canvas-header--menu-icon': {
      cursor: 'pointer',
    },
    [mq.sm]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100%',
      flexGrow: centeredNav ? 1 : 'unset',

      '> *:not(.canvas-header--menu-icon)': {
        display: 'none',
      },
    },
    [mq.md]: {
      '> *': {
        margin: `0 ${spacing.s}`,
      },

      '> *:last-child': {
        marginRight: 0,
      },

      '> *:not(.canvas-header--menu-icon)': {
        display: 'flex',
      },
    },
  };
},                                              navStyle);

class Brand extends React.Component<HeaderProps> {
  render() {
    return (
      <span>
        {this.props.variant === HeaderVariant.Dub &&
          (this.props.brand || (
            <DubLogoTitle
              title={this.props.title ? this.props.title : ''}
              themeColor={this.props.themeColor}
            />
          ))}
        {this.props.variant === HeaderVariant.Full &&
          (this.props.brand || (
            <WorkdayLogoTitle
              title={this.props.title ? this.props.title : ''}
              themeColor={this.props.themeColor}
            />
          ))}
      </span>
    );
  }
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  static Theme = HeaderTheme;
  static Variant = HeaderVariant;
  static defaultProps = {
    themeColor: HeaderTheme.White,
    variant: HeaderVariant.Dub,
    breakpoints: {
      sm: 320,
      md: 768,
      lg: 1120,
    },
  };

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      screenSize: this.getScreenSize(window.innerWidth, props.breakpoints),
    };
    this.updateScreenSize = throttle(this.updateScreenSize.bind(this), 150);
  }

  getScreenSize(width: number, breakpoints: HeaderProps['breakpoints']): string {
    const sizes = Object.keys(breakpoints);
    let screenSize = sizes[0];

    sizes.forEach(k => {
      if (width >= breakpoints[k]) {
        screenSize = k;
      }
    });

    return screenSize;
  }

  updateScreenSize(): void {
    requestAnimationFrame(() => {
      const currentScreenSize = this.getScreenSize(window.innerWidth, this.props.breakpoints);

      if (currentScreenSize !== this.state.screenSize) {
        this.setState({
          screenSize: currentScreenSize,
        });
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  /**
   * Helper that recursively maps ReactNodes to their theme-based equivalent.
   * Any children that are included in a Header may need to undergo transformation
   * before stamped out in render().
   *
   * E.g. <SystemIcon> components need to have the appropriate `color` and `colorHover`
   * props set based on the theme.cu
   *
   * @param children From props.children of a React component
   *
   * @returns {React.ReactNode} The child/children to be rendered
   */
  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // child is now guaranteed to be a valid ReactElement from the check above

      type Props = {children: React.ReactNode};
      const propsChildren = (child as React.ReactElement<Props>).props.children;

      if (React.Children.count(propsChildren)) {
        if (child.type === 'nav' && this.state.screenSize !== 'lg') {
          // Screen size is smaller than our largest breakpoint so turn nav into a hamburger
          const hamburgerIconProps = {
            color: themes[this.props.themeColor].systemIcon.color,
            colorHover: themes[this.props.themeColor].systemIcon.colorHover,
            icon: justifyIcon,
            onClick: this.props.handleMenuClick,
          };

          // TODO: This needs to get changed to IconButton when we get it restyled for headers
          return (
            <SystemIcon {...hamburgerIconProps} className="canvas-header--menu-icon" tabIndex={0} />
          );
        }
        return React.cloneElement(child as React.ReactElement<Props>, {
          children: this.renderChildren(propsChildren),
        });
      }

      if (child.type === SystemIcon) {
        return React.cloneElement(child as React.ReactElement<SystemIconProps>, {
          color: themes[this.props.themeColor].systemIcon.color,
          colorHover: themes[this.props.themeColor].systemIcon.colorHover,
        });
      }

      return child;
    });
  }

  render() {
    return (
      <HeaderShell {...this.props}>
        <BrandSlot grow={this.props.centeredNav}>
          {this.props.brandUrl ? (
            <BrandLink href={this.props.brandUrl}>
              <Brand {...this.props} />
            </BrandLink>
          ) : (
            <Brand {...this.props} />
          )}
        </BrandSlot>
        <ChildrenSlot {...this.props}>{this.renderChildren(this.props.children)}</ChildrenSlot>
      </HeaderShell>
    );
  }
}
