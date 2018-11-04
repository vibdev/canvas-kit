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
   * True if the search input should be highlighted beside the table. False if it should go with the other children.
   */
  highlight?: boolean;
  /**
   * An event handler function that gets called when the search input is submitted
   */
  onSubmit?: (e: React.SyntheticEvent) => void;
};

const SearchContainer = styled('div')({
  position: 'relative',
});

const SearchInput = styled('input')<SearchProps>(
  type.body,
  {
    padding: spacing.xs,
    paddingLeft: spacingNumbers.xl + spacingNumbers.xxxs,
    maxWidth: spacingNumbers.l * 10,
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
  ({themeColor, highlight}) => ({
    background: themeColor === HeaderTheme.White ? colors.soap200 : 'rgba(0,0,0,0.2)',
    flexGrow: highlight ? 1 : undefined,
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

  render() {
    const {themeColor, highlight, placeholder, value} = this.props;

    return (
      <SearchContainer>
        <SystemIcon icon={searchIcon} style={iconStyle} />
        <SearchInput
          placeholder={placeholder}
          value={value}
          themeColor={themeColor}
          highlight={highlight}
        />
      </SearchContainer>
    );
  }
}
