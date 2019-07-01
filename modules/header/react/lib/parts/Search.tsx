import * as React from 'react';
import styled from 'react-emotion';
import uuid from 'uuid/v4';
import {CSSObject} from 'create-emotion';
import {CSSTransition} from 'react-transition-group';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import {
  colors,
  depth,
  spacing,
  spacingNumbers,
  type,
  commonColors,
} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {IconButton} from '@workday/canvas-kit-react-button';
import {MenuItemProps} from '@workday/canvas-kit-react-menu';
import {Card} from '@workday/canvas-kit-react-card';
import {searchIcon, xIcon, xSmallIcon} from '@workday/canvas-system-icons-web';

export interface SearchProps extends React.HTMLAttributes<HTMLFormElement> {
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
   * An function that gets called and passed the current input value when the search form is submitted
   */
  onSearchSubmit?: (query: string) => void;
  /**
   * An function that gets called and passed the current input value when the search form value changes
   */
  onValueChange?: (query: string) => void;
  /**
   * An array of menu items to show under the search bar, primarily used for autocompletion of queries
   */
  autocompleteItems?: React.ReactElement<MenuItemProps>[];
  /**
   * Custom id for the search autocomplete accessibility
   */
  accessibleId: string;
}

export interface SearchState {
  mobileToggle: boolean;
  value: string;
  focused: boolean;
  hovered: boolean;
  showingAutocomplete: boolean;
  selectedAutocompleteIndex: number | null;
}

const mobileTransitionDuration = 250;

const SearchContainer = styled('form')<Pick<SearchProps, 'rightAlign' | 'collapse'>>(
  {
    position: 'relative',
    marginLeft: spacing.m,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  ({rightAlign, collapse}) => {
    const rightAlignStyles: CSSObject = rightAlign
      ? {
          display: 'flex',
          maxWidth: '480px',
        }
      : {};
    const collapseStyles: CSSObject = collapse
      ? {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          margin: 0,
          position: 'absolute',
          background: colors.frenchVanilla100,
          maxWidth: 'unset',
          zIndex: 1,
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
  }
);

const accessibleHide: CSSObject = {
  clip: 'rect(1px, 1px, 1px, 1px)', // Deprecated but still used by most browsers, clip-path will be taking its place soon.
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
  position: 'absolute',
  overflow: 'hidden',
  wordWrap: 'normal',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: 0,
  border: 0,
};

const Label = styled('label')({
  ...accessibleHide,
});

const Status = styled('div')({
  ...accessibleHide,
});

const searchHeight = 40;
const searchWidth: CSSObject = {
  maxWidth: '480px',
  minWidth: spacingNumbers.xs * 10,
  width: '100%',
};
const searchWidthSmall = {
  maxWidth: 'unset',
  width: `calc(100% - ${spacing.l} - ${spacing.xl})`,
};
const SearchInput = styled('input')<Pick<SearchProps, 'themeColor' | 'collapse'>>(
  type.body,
  {
    padding: spacing.xs,
    paddingLeft: spacing.xl,
    height: `${searchHeight}px`,
    ...searchWidth,
    borderRadius: '4px',
    boxSizing: 'border-box',
    border: 'none',
    WebkitAppearance: 'none',
    transition: 'background 150ms',
    zIndex: 2,
    '&::-webkit-search-cancel-button': {
      display: 'none',
    },
  },
  ({themeColor, collapse}) => {
    const inputColors = getInputColors(themeColor, collapse!);

    const focusStyles = {
      '&:not([disabled])': {
        '&:focus, &:active': {
          outline: 'none',
          boxShadow: inputColors.focusBoxShadow,
          background: inputColors.focusBackground,
          color: colors.blackPepper300,
          '&::placeholder': {
            color: colors.licorice300,
          },
        },
        '&:hover': {
          background: themeColor === HeaderTheme.White && !collapse ? colors.soap300 : undefined,
        },
      },
    };

    const collapseStyles = collapse
      ? {
          ...type.h3,
          fontWeight: 400,
          background: 'transparent',
          padding: `${spacing.xs} 0`,
          margin: `${spacing.xs} ${spacing.s}`,
          ...searchWidthSmall,
          '&::-webkit-search-cancel-button': {
            display: 'none',
          },
        }
      : {};

    return {
      background: inputColors.background,
      color: inputColors.color,
      '&::placeholder': {
        color: inputColors.placeholderColor,
      },
      ...focusStyles,
      ...collapseStyles,
    };
  }
);

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: spacing.xxs,
};

const SearchReset = styled('span')<Pick<SearchState, 'value'>>(
  {
    borderRadius: 24,
    height: 24,
    marginLeft: -(24 + 8),
    marginRight: 8,
    width: 24,
    zIndex: 3,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ({value}) => ({
    display: value ? 'block' : 'none',
  })
);

const MenuContainer = styled(Card)<Pick<SearchProps, 'collapse'>>(
  {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: `${searchHeight}px`,
    borderRadius: '0 0 3px 3px',
    background: commonColors.background,
    border: `none`,
    ...searchWidth,
  },
  ({collapse}) => {
    if (collapse) {
      return {
        marginTop: spacing.m,
      };
    } else {
      return {};
    }
  }
);

const SearchIcon = styled(SystemIcon)({
  zIndex: 3,
});

const Autocomplete = styled('ul')({
  padding: 0,
  margin: `${spacing.xxs} 0`,
});

const listBoxIdPart = `listbox`;
const labelIdPart = `label`;
const optionIdPart = `option`;
type FormAttributes = React.FormHTMLAttributes<HTMLFormElement>;
type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

const buildAutocompleteMenu = (
  id: string,
  showMenu: boolean,
  listItems: React.ReactElement<MenuItemProps>[],
  listItemCallback: (e: React.SyntheticEvent, itemProps: MenuItemProps) => void,
  selectedIndex: number | null,
  isCollapsed: boolean
): React.ReactNode | false =>
  showMenu && (
    <MenuContainer collapse={isCollapsed} padding={spacing.zero} depth={depth[1]}>
      <Autocomplete
        role="listbox"
        id={`${id}-${listBoxIdPart}`}
        aria-labelledby={`${id}-${labelIdPart}`}
      >
        {listItems.map((listboxItem: React.ReactElement<MenuItemProps>, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(listboxItem, {
              id: `${id}-${optionIdPart}-${index}`,
              role: 'option',
              isFocused: selectedIndex === index,
              'aria-selected': selectedIndex === index,
              onClick: (event: React.MouseEvent) => {
                event.preventDefault();
                listItemCallback(event, listboxItem.props);
              },
            })}
          </React.Fragment>
        ))}
      </Autocomplete>
    </MenuContainer>
  );

export class Search extends React.Component<SearchProps, SearchState> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    headerHeight: HeaderHeight.Small,
    placeholder: 'Search',
    accessibleId: `header-search-box-${uuid()}`,
  };

  private inputRef: React.RefObject<HTMLInputElement>;
  private formRef: React.RefObject<HTMLFormElement>;

  constructor(props: SearchProps) {
    super(props);
    this.inputRef = React.createRef();
    this.formRef = React.createRef();
    this.state = {
      mobileToggle: false,
      focused: false,
      hovered: false,
      value: this.props.value ? this.props.value : '',
      showingAutocomplete:
        !!this.props.autocompleteItems && this.props.autocompleteItems.length > 0,
      selectedAutocompleteIndex: null,
    };
  }

  componentDidUpdate(prevProps: SearchProps, prevState: SearchState) {
    if (this.state.value !== prevState.value && this.props.onValueChange) {
      this.props.onValueChange(this.state.value);
    }
    const listboxOrFocusChanged =
      this.props.autocompleteItems !== prevProps.autocompleteItems ||
      this.state.focused !== prevState.focused;
    if (this.props.autocompleteItems && listboxOrFocusChanged) {
      this.setState({
        showingAutocomplete: this.props.autocompleteItems.length > 0 && this.state.focused,
      });
    }
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({showingAutocomplete: false, mobileToggle: false});
    if (this.props.onSearchSubmit && this.inputRef.current) {
      this.props.onSearchSubmit(this.inputRef.current.value);
    }
  };

  openMobileSearch = (e: React.SyntheticEvent) => {
    this.setState({mobileToggle: true});
  };

  closeMobileSearch = (e: React.SyntheticEvent) => {
    this.setState({mobileToggle: false});
  };

  focusInput = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  setFocused = (event: React.FocusEvent) => {
    if (event.type === 'blur' && this.formRef.current) {
      let target: EventTarget | null = event.relatedTarget;
      if (target === null) {
        // IE11 swaps related and active target before it fires the blur event
        target = document.activeElement;
      }

      if (target && this.formRef.current.contains(target as Element)) {
        return;
      }
    }

    this.setState({focused: event.type === 'focus'});
  };

  handleHover = (hover: boolean) => {
    this.setState({hovered: hover});
  };

  handleAutocompleteClick = (event: React.SyntheticEvent, menuItemProps: MenuItemProps): void => {
    if (menuItemProps.isDisabled) {
      return;
    }
    this.setState({showingAutocomplete: false});
    if (menuItemProps.onClick) {
      menuItemProps.onClick(event);
    }
  };

  handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    if (event.ctrlKey || event.altKey || event.metaKey || !this.props.autocompleteItems) {
      return;
    }
    const currentIndex = this.state.selectedAutocompleteIndex;
    const autoCompleteItemCount = this.props.autocompleteItems.length;
    const firstItem = 0;
    const lastItem = autoCompleteItemCount - 1;
    let nextIndex = null;

    switch (event.key) {
      case 'ArrowUp':
        const upIndex = currentIndex != null ? currentIndex - 1 : lastItem;
        nextIndex = upIndex < 0 ? lastItem : upIndex;
        break;

      case 'ArrowDown':
        const downIndex = currentIndex != null ? currentIndex + 1 : firstItem;
        nextIndex = downIndex >= autoCompleteItemCount ? firstItem : downIndex;
        break;

      case 'Escape':
        this.setState({value: ''});
        break;

      case 'Enter':
        if (this.state.selectedAutocompleteIndex != null) {
          const item = this.props.autocompleteItems[this.state.selectedAutocompleteIndex];
          this.handleAutocompleteClick(event, item.props);
          event.stopPropagation();
          event.preventDefault();
        }
        break;

      default:
    }
    this.setState({selectedAutocompleteIndex: nextIndex});
  };

  handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({value: event.target.value});
  };

  resetSearchInput = (): void => {
    this.setState({value: ''});
    this.focusInput();
  };

  buildStatusString = (listCount: number): string => {
    return `There ${listCount === 1 ? 'is' : 'are'} ${listCount} suggestion${
      listCount === 1 ? '' : 's'
    }.`;
  };

  _renderCollapsed(wrapperProps: FormAttributes, inputProps: InputAttributes) {
    const iconButtonType =
      this.props.themeColor === HeaderTheme.White
        ? IconButton.Types.Default
        : IconButton.Types.Inverse;

    const collapsedIconStyle = {
      marginLeft: spacing.s,
      cursor: 'pointer',
    };

    const closeIconStyle = {
      left: 'unset',
      right: spacing.m,
      cursor: 'pointer',
    };

    const {
      themeColor,
      placeholder,
      value,
      rightAlign,
      collapse,
      onSearchSubmit,
      onValueChange,
      autocompleteItems,
      accessibleId,
      ...elemProps
    } = this.props;

    return (
      <React.Fragment>
        <IconButton
          icon={searchIcon}
          buttonType={iconButtonType}
          style={collapsedIconStyle}
          onClick={this.openMobileSearch}
        />
        <CSSTransition
          in={this.state.mobileToggle}
          classNames="search"
          timeout={mobileTransitionDuration}
          onEntering={this.focusInput}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <SearchContainer
            {...elemProps}
            {...wrapperProps}
            collapse={collapse}
            rightAlign={rightAlign}
            onSubmit={this.handleSubmit}
            innerRef={this.formRef}
          >
            {autocompleteItems && (
              <Status role="status" aria-live="polite">
                {this.state.showingAutocomplete && this.buildStatusString(autocompleteItems.length)}
              </Status>
            )}
            <Label htmlFor={`${accessibleId}-${labelIdPart}`}>Search</Label>
            <SearchInput
              {...inputProps}
              placeholder={placeholder}
              id={`${accessibleId}-${labelIdPart}`}
              themeColor={themeColor}
              collapse={collapse}
              type="search"
              role="search"
              innerRef={this.inputRef}
              onFocus={this.setFocused}
              onBlur={this.setFocused}
              onChange={this.handleSearchInputChange}
              onKeyDown={this.handleKeyboardShortcuts}
              value={this.state.value}
            />
            <IconButton
              icon={xIcon}
              type="button"
              buttonType={IconButton.Types.Default}
              style={{...iconStyle, ...closeIconStyle}}
              onClick={this.closeMobileSearch}
            />
            {buildAutocompleteMenu(
              this.props.accessibleId,
              this.state.showingAutocomplete,
              this.props.autocompleteItems || [],
              this.handleAutocompleteClick,
              this.state.selectedAutocompleteIndex,
              !!this.props.collapse
            )}
          </SearchContainer>
        </CSSTransition>
      </React.Fragment>
    );
  }

  render() {
    const {
      themeColor,
      placeholder,
      value,
      rightAlign,
      collapse,
      onSearchSubmit,
      onValueChange,
      autocompleteItems,
      accessibleId,
      ...elemProps
    } = this.props;

    let autocompleteWrapperProps: FormAttributes = {};
    let autocompleteInputProps: InputAttributes = {};
    if (autocompleteItems) {
      autocompleteWrapperProps = {
        role: 'combobox',
        'aria-haspopup': 'listbox',
        'aria-owns': `${accessibleId}-${listBoxIdPart}`,
        'aria-expanded': autocompleteItems && autocompleteItems.length > 0,
      };
      autocompleteInputProps = {
        'aria-autocomplete': 'list',
        'aria-controls': `${accessibleId}-${listBoxIdPart}`,
        'aria-activedescendant':
          this.state.selectedAutocompleteIndex != null
            ? `${accessibleId}-${optionIdPart}-${this.state.selectedAutocompleteIndex}`
            : '',
      };
    }

    if (collapse) {
      return this._renderCollapsed(autocompleteWrapperProps, autocompleteInputProps);
    }

    const iconColor =
      this.state.hovered && this.state.focused && themeColor === HeaderTheme.White
        ? colors.licorice500
        : this.state.hovered && this.state.focused
        ? colors.licorice500
        : this.state.focused && themeColor === HeaderTheme.White
        ? colors.licorice500
        : this.state.focused
        ? colors.licorice500
        : this.state.hovered && themeColor === HeaderTheme.White
        ? colors.licorice500
        : this.state.hovered
        ? colors.frenchVanilla100
        : themeColor === HeaderTheme.White
        ? colors.licorice200
        : colors.frenchVanilla100;

    return (
      <SearchContainer
        innerRef={this.formRef}
        onSubmit={this.handleSubmit}
        collapse={collapse}
        rightAlign={rightAlign}
        {...autocompleteWrapperProps}
        {...elemProps}
      >
        <SearchIcon
          icon={searchIcon}
          style={{...iconStyle, pointerEvents: 'none'}}
          color={iconColor}
          colorHover={iconColor}
        />
        {autocompleteItems && (
          <Status role="status" aria-live="polite">
            {this.state.showingAutocomplete && this.buildStatusString(autocompleteItems.length)}
          </Status>
        )}
        <Label htmlFor={`${accessibleId}-${labelIdPart}`}>Search</Label>
        <SearchInput
          {...autocompleteInputProps}
          placeholder={placeholder}
          id={`${accessibleId}-${labelIdPart}`}
          type="search"
          role="search"
          value={this.state.value}
          innerRef={this.inputRef}
          onMouseEnter={() => this.handleHover(true)}
          onMouseLeave={() => this.handleHover(false)}
          onChange={this.handleSearchInputChange}
          onKeyDown={this.handleKeyboardShortcuts}
          onFocus={this.setFocused}
          onBlur={this.setFocused}
          collapse={collapse}
          themeColor={themeColor}
        />
        <SearchReset
          aria-label="Reset Search Input"
          className="reset-input"
          value={this.state.value}
          onClick={this.resetSearchInput}
        >
          <SearchIcon
            icon={xSmallIcon}
            color={colors.licorice200}
            colorHover={colors.licorice500}
          />
        </SearchReset>
        {buildAutocompleteMenu(
          accessibleId,
          this.state.showingAutocomplete,
          autocompleteItems || [],
          this.handleAutocompleteClick,
          this.state.selectedAutocompleteIndex,
          !!collapse
        )}
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
      focusBackground: colors.soap200,
      focusBoxShadow: focusRing().boxShadow,
    };
  } else {
    return {
      background: 'rgba(0,0,0,0.2)',
      color: colors.frenchVanilla100,
      placeholderColor: colors.frenchVanilla100,
      focusBackground: colors.frenchVanilla100,
    };
  }
}
