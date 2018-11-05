import * as React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import {type, spacing} from '@workday/canvas-kit-react-core';
import {DubLogoTitle, Search, WorkdayLogoTitle} from './parts';
import {themes} from './shared/themes';
import {HeaderTheme, HeaderVariant, HeaderHeight} from './shared/types';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react-icon';
import {justifyIcon} from '@workday/canvas-system-icons-web';
import throttle from 'lodash-es/throttle';
import {makeMq} from '@workday/canvas-kit-react-common';

export interface HeaderProps {
  /**
   * A HeaderTheme enum indicating which theme to use (White, Blue or Transparent)
   */
  themeColor: HeaderTheme;
  /**
   * A HeaderVariant enum indicating whether to use the Dub (small) or Full (large) version
   */
  variant: HeaderVariant;
  /**
   * The title to display in the header. Not used if `brand` is provided
   */
  title?: string;
  /**
   * A React node that will replace the dub logo and title if provided.
   */
  brand?: React.ReactNode;
  /**
   * The URL href of the logo link
   */
  brandUrl?: string;
  /**
   * True if the nav should be centered. False if it should be aligned right
   */
  centeredNav?: boolean;
  /**
   * True if the search input should be left aligned with the logo. False if it should be aligned right
   */
  highlightSearch?: boolean;
  /**
   * An event handler function that gets called when the responsive menu icon is clicked
   */
  onMenuClick?: (e: React.SyntheticEvent) => void;
  /**
   * An event handler function that gets called when the search field is submitted
   */
  onSearchSubmit?: (query: string) => void;
  /**
   * An object that allows for custom specified breakpoints (sm, md, lg)
   */
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
        '&:hover': {
          // De-emphasizes all color on hover, this allows us to create an illusion that hovering over a specific element
          // fades out the rest
          color: theme.linkFadeOutColor,
        },
        '& li': {
          boxSizing: 'border-box',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: `0px ${spacing.s}`,
          margin: `0 ${spacing.xxxs}`,
          fontSize: '14px',
          fontWeight: 700,
          height: 'inherit',
          transition: `color 150ms ease-out 0s`,
          cursor: 'pointer',
          '&:first-child': {
            marginLeft: 0,
          },
          '&:last-child': {
            marginRight: 0,
          },
          '& a': {
            color: 'inherit',
            textDecoration: 'none',
            '&:visited': {
              color: 'inherit', // Keeps visited links from becoming default purple
            },
          },
          '&:hover, &:active': {
            color: theme.linkColor, // Completes the illusion of sibling elements fading into the background on hover
          },
          '&.current': {
            color: theme.currentLinkColor,
            '&:hover, &:active': {
              color: theme.currentLinkColor,
            },
            '&:after': {
              position: 'absolute',
              bottom: 0,
              left: 0,
              content: `''`,
              height: 4,
              width: '100%',
              backgroundColor: theme.chipColor,
              borderRadius: '3px 3px 0 0',
            },
          },
        },
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
      marginLeft: spacing.s,
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

export default class Header extends React.Component<HeaderProps, HeaderState> {
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

  /**
   * Returns which breakpoint size to use (sm, md, lg)
   * @param {number} width Current screen width
   * @param {Object} breakpoints Specification of breakpoint pixel values for sm, md, lg screens
   * @returns {string}
   */
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

  /**
   * Updates the state screen size/width if it has changed (syncs w/ browser paints using RAF)
   */
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
            onClick: this.props.onMenuClick,
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
        {this.props.onSearchSubmit && (
          <Search
            onSubmit={this.props.onSearchSubmit}
            highlight={this.props.highlightSearch}
            themeColor={this.props.themeColor}
            placeholder="Search"
          />
        )}
        <ChildrenSlot {...this.props}>{this.renderChildren(this.props.children)}</ChildrenSlot>
      </HeaderShell>
    );
  }
}
