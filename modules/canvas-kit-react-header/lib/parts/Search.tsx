import * as React from 'react';
import styled from 'react-emotion';
import {CSSTransition} from 'react-transition-group';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import {colors, spacing, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {searchIcon, xIcon} from '@workday/canvas-system-icons-web';

export type SearchProps = {
  /**
   * The theme of the header the search input is being rendered in
   */
  themeColor: HeaderTheme;
  /**
   * The placeholder text in the input
   */
  placeholder: string;
  /**
   * The current value of the text input if a search has already been performed
   */
  value?: string;
  /**
   * False if the search input should grow to left align it. True if it should right align.
   */
  rightAlign?: boolean;
  /**
   * True if the search input should be collapsed into a toggle icon (for responsive).
   */
  collapse?: boolean;
  /**
   * An event handler function that gets called when the search input is submitted
   */
  onSubmit?: (query: string) => void;
};

export interface SearchState {
  mobileToggle: boolean;
}

const mobileTransitionDuration = 250;

const SearchContainer = styled('form')<SearchProps>(
  {
    position: 'relative',
    marginLeft: spacing.m,
    flexGrow: 1,
  },
  ({rightAlign, collapse}) => {
    const rightAlignStyles = rightAlign
      ? {
          display: 'flex',
          maxWidth: spacingNumbers.l * 10,
        }
      : {};
    const collapseStyles = collapse
      ? {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          margin: 0,
          position: 'absolute',
          background: colors.frenchVanilla100,
          maxWidth: 'unset',
          '&.search-enter': {
            opacity: 0,
          },
          '&.search-enter-active': {
            opacity: 1,
            transition: `opacity ${mobileTransitionDuration}ms`,
          },
          '&.search-exit': {
            opacity: 1,
          },
          '&.search-exit-active': {
            opacity: 0,
            transition: `opacity ${mobileTransitionDuration}ms`,
          },
        }
      : {};
    return {...rightAlignStyles, ...collapseStyles};
    //   ({
    //   // TODO - use same syntax from search input. Wasn't working with position for some reason
    //   display: rightAlign ? 'flex' : undefined,
    //   maxWidth: rightAlign && !collapse ? spacingNumbers.l * 10 : 'unset',
    //   position: collapse ? 'absolute' : undefined,
    //   top: collapse ? 0 : undefined,
    //   right: collapse ? 0 : undefined,
    //   left: collapse ? 0 : undefined,
    //   bottom: collapse ? 0 : undefined,
    //   margin: collapse ? 0 : `0 ${spacing.s}`,
    //   background: collapse ? colors.frenchVanilla100 : undefined,
    // })
  }
);

const SearchInput = styled('input')<SearchProps>(
  type.body,
  {
    padding: spacing.xs,
    paddingLeft: spacingNumbers.xl + spacingNumbers.xxxs,
    maxWidth: spacingNumbers.l * 10,
    minWidth: spacingNumbers.xs * 10,
    width: '100%',
    height: '40px',
    borderRadius: '3px',
    boxSizing: 'border-box',
    border: 'none',
    WebkitAppearance: 'none',
    '&:not([disabled])': {
      '&:focus, &:active': {
        outline: 'none',
        ...focusRing(),
      },
    },
  },
  ({themeColor, collapse}) => {
    const inputColors = getInputColors(themeColor, collapse!);

    const collapseStyles = collapse
      ? {
          ...type.h3,
          fontWeight: 400,
          background: 'transparent',
          padding: `${spacing.xs} 0`,
          margin: `${spacing.xs} ${spacing.s}`,
          maxWidth: 'unset',
          width: `calc(100% - ${spacing.l} - ${spacing.xl})`,
          '&::-webkit-search-cancel-button': {
            display: 'none',
          },
          '&:not([disabled])': {
            '&:focus, &:active': {
              boxShadow: 'none',
              // TODO: Fix this from flashing on click
            },
          },
        }
      : {};

    return {
      background: inputColors.background,
      color: inputColors.color,
      '&::placeholder': {
        color: inputColors.placeholderColor,
      },
      ...collapseStyles,
    };
  }
);

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: spacing.xs,
};

export class Search extends React.Component<SearchProps, SearchState> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    headerHeight: HeaderHeight.Small,
    placeholder: 'Search',
  };

  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: SearchProps) {
    super(props);
    this.inputRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.openMobileSearch = this.openMobileSearch.bind(this);
    this.closeMobileSearch = this.closeMobileSearch.bind(this);
    this.state = {
      mobileToggle: false,
    };
  }

  onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.inputRef.current!.value);
    }
  }

  openMobileSearch(e: React.SyntheticEvent) {
    this.setState({mobileToggle: true});
  }

  closeMobileSearch(e: React.SyntheticEvent) {
    this.setState({mobileToggle: false});
  }

  _renderCollapsed(iconColor: string, iconColorHover: string) {
    const collapsedIconStyle = {
      marginLeft: spacing.s,
      cursor: 'pointer',
    };

    const closeIconStyle = {
      left: 'unset',
      right: spacing.m,
      cursor: 'pointer',
    };

    const {onSubmit, ...props} = this.props;

    return (
      <React.Fragment>
        <SystemIcon
          icon={searchIcon}
          color={iconColor}
          colorHover={iconColorHover}
          style={collapsedIconStyle}
          onClick={this.openMobileSearch}
        />
        <CSSTransition
          in={this.state.mobileToggle}
          classNames="search"
          timeout={mobileTransitionDuration}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <SearchContainer onSubmit={onSubmit} {...props}>
            <SearchInput {...props} type="search" innerRef={this.inputRef} />
            <SystemIcon
              icon={xIcon}
              style={{...iconStyle, ...closeIconStyle}}
              color={colors.licorice200}
              colorHover={colors.licorice500}
              onClick={this.closeMobileSearch}
            />
          </SearchContainer>
        </CSSTransition>
      </React.Fragment>
    );
  }

  render() {
    const {onSubmit, ...props} = this.props;

    const iconColor =
      props.themeColor === HeaderTheme.White ? colors.licorice200 : colors.frenchVanilla100;

    if (props.collapse) {
      // TODO: Replace with UDE icon button
      const iconColorHover =
        props.themeColor === HeaderTheme.White ? colors.licorice500 : colors.blueberry100;

      return this._renderCollapsed(iconColor, iconColorHover);
    }

    return (
      <SearchContainer onSubmit={onSubmit} {...props}>
        <SystemIcon icon={searchIcon} style={iconStyle} color={iconColor} colorHover={iconColor} />
        <SearchInput type="search" innerRef={this.inputRef} {...props} />
      </SearchContainer>
    );
  }
}

function getInputColors(themeColor: HeaderTheme, collapsed: boolean) {
  if (collapsed) {
    return {
      background: 'transparent',
      color: colors.blackPepper300,
      placeholderColor: colors.licorice300,
    };
  } else if (themeColor === HeaderTheme.White) {
    return {
      background: colors.soap200,
      color: colors.blackPepper300,
      placeholderColor: colors.licorice300,
    };
  } else {
    return {
      background: 'rgba(0,0,0,0.2)',
      color: colors.frenchVanilla100,
      placeholderColor: colors.frenchVanilla100,
    };
  }
}
