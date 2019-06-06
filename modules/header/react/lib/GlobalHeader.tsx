import * as React from 'react';
import Header from './Header';
import {HeaderVariant, BreakpointType} from './shared/types';
import {DubLogoTitle} from './parts';
import {MenuItemProps} from '@workday/canvas-kit-react-menu';

export interface GlobalHeaderProps {
  /**
   * A React node that will replace the dub logo and title if provided.
   */
  brand: React.ReactNode;
  /**
   * A React node that will replace the menuToggle if provided.
   */
  menuToggle?: React.ReactNode;
  /**
   * An event handler function that gets called when the responsive menu icon is clicked
   */
  onMenuClick?: (e: React.SyntheticEvent) => void;
  /**
   * An event handler function that gets called when the search field is submitted
   */
  onSearchSubmit?: (query: string) => void;
  /**
   * An function that gets called and passed the current input value when the search form value changes
   */
  onSearchInputChange?: (query: string) => void;
  /**
   * An array of menu items to show under the search bar, primarily used for autocompletion of queries
   */
  searchAutocompleteItems?: React.ReactElement<MenuItemProps>[];
  /**
   * An object that allows for custom specified breakpoint
   */
  breakpoint: number;
  /**
   * An event handler function that gets called when the screen size changes to a different breakpoint key
   */
  onBreakpointChange?: (key: BreakpointType | string) => void;
  /**
   * Custom id for the search autocomplete accessibility
   */
  accessibleId?: string;
}

export default class GlobalHeader extends React.Component<GlobalHeaderProps> {
  static defaultProps = {
    brand: <DubLogoTitle />,
    breakpoint: 600,
  };
  public render() {
    // As GlobalHeader only has two states (so one breakpoint)
    // this is a workaround until we change the breakpoints
    // in Header to support two breakpoints instead of three.
    const breakpoints = {sm: 0, md: 1, lg: this.props.breakpoint};

    return (
      <Header
        brand={this.props.brand}
        menuToggle={this.props.menuToggle}
        onSearchSubmit={this.props.onSearchSubmit}
        onSearchInputChange={this.props.onSearchInputChange}
        searchAutocompleteItems={this.props.searchAutocompleteItems}
        onMenuClick={this.props.onMenuClick}
        variant={HeaderVariant.Global}
        breakpoints={breakpoints}
        onBreakpointChange={this.props.onBreakpointChange}
        accessibleId={this.props.accessibleId}
      >
        {this.props.children}
      </Header>
    );
  }
}
