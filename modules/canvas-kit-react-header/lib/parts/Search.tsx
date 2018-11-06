import * as React from 'react';
import styled from 'react-emotion';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import {colors, spacing, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {searchIcon} from '@workday/canvas-system-icons-web';

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

const SearchContainer = styled('form')<SearchProps>(
  {
    position: 'relative',
    margin: `0 ${spacing.s}`,
    flexGrow: 1,
  },
  ({rightAlign}) => ({
    display: rightAlign ? 'flex' : undefined,
    maxWidth: rightAlign ? spacingNumbers.l * 10 : undefined,
  })
);

const SearchInput = styled('input')<SearchProps>(
  type.body,
  {
    padding: spacing.xs,
    paddingLeft: spacingNumbers.xl + spacingNumbers.xxxs,
    maxWidth: spacingNumbers.l * 10,
    width: '100%',
    height: '40px',
    borderRadius: '3px',
    boxSizing: 'border-box',
    border: 'none',
    '&:not([disabled])': {
      '&:focus, &:active': {
        outline: 'none',
        ...focusRing(),
      },
    },
  },
  ({themeColor, collapse}) => ({
    display: collapse ? 'none' : 'block',
    background: themeColor === HeaderTheme.White ? colors.soap200 : 'rgba(0,0,0,0.2)',
    color: themeColor === HeaderTheme.White ? colors.blackPepper300 : colors.frenchVanilla100,
    '&::placeholder': {
      color: themeColor === HeaderTheme.White ? colors.licorice300 : colors.frenchVanilla100,
    },
  })
);

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: spacing.xs,
};

export class Search extends React.Component<SearchProps> {
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
  }

  onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.inputRef.current!.value);
    }
  }

  render() {
    const {themeColor, rightAlign, placeholder, value, collapse} = this.props;

    const iconColor =
      themeColor === HeaderTheme.White ? colors.licorice200 : colors.frenchVanilla100;

    if (collapse) {
      const collapsedIconStyle = {
        margin: `0 ${spacing.s}`,
        cursor: 'pointer',
      };
      // TODO: Replace with UDE icon button
      const iconColorHover =
        themeColor === HeaderTheme.White ? colors.licorice500 : colors.blueberry100;

      return (
        <SystemIcon
          icon={searchIcon}
          color={iconColor}
          colorHover={iconColorHover}
          style={collapsedIconStyle}
        />
      );
    }

    return (
      <SearchContainer onSubmit={this.onSubmit} rightAlign={rightAlign}>
        <SystemIcon icon={searchIcon} style={iconStyle} color={iconColor} colorHover={iconColor} />
        <SearchInput
          type="search"
          innerRef={this.inputRef}
          placeholder={placeholder}
          value={value}
          themeColor={themeColor}
        />
      </SearchContainer>
    );
  }
}
