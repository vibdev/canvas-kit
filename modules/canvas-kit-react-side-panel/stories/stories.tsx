/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../../utils/storybook';
import {homeIcon, starIcon, rocketIcon, plusIcon} from '@workday/canvas-system-icons-web';
import styled from 'react-emotion';
import {css} from 'emotion';

import {colors, type} from '@workday/canvas-kit-react-core';
import README from '../README.md';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {Header} from '@workday/canvas-kit-react-header';
import {
  Button,
  ButtonTypes,
  IconButton,
  IconButtonTypes,
  ButtonSizes,
} from '@workday/canvas-kit-react-button';
import {Avatar} from '@workday/canvas-kit-react-avatar';

import SidePanel from '..'; // tslint:disable-line:import-name
import {SidePanelOpenDirection} from '../lib/SidePanel';

interface SidePanelState {
  open: boolean;
  isResponsive: boolean;
}

// TODO replace this with our list component
const ListItem = styled('li')({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'end',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.soap300,
  },
});
const ListTitle = styled('span')({
  ...type.h4,
  paddingLeft: 24,
});
const UnorderedList = styled('ul')({
  paddingLeft: 0,
});

const listItemOpen = css({
  padding: '15px 24px',
  marginLeft: '-24px',
  marginRight: '-24px',
});

const listItemClosed = css({
  padding: '15px 8px',
  marginLeft: 0,
  marginRight: 0,
});

class SidePanelWrapper extends React.Component<{}, SidePanelState> {
  public state = {
    open: true,
    isResponsive: true,
  };
  public componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  public componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }
  public render() {
    const {open} = this.state;
    const listItemStyles = open ? listItemOpen : listItemClosed;
    return (
      <SidePanel
        openDirection={SidePanelOpenDirection.Right}
        open={open}
        onToggleClick={this.onClick}
        title={'Side Panel Header'}
      >
        {open ? (
          <Button buttonType={ButtonTypes.Primary}>Add New</Button>
        ) : (
          <IconButton buttonSize={ButtonSizes.Small} buttonType={IconButtonTypes.Filled}>
            <SystemIcon icon={plusIcon} />
          </IconButton>
        )}
        <UnorderedList>
          <ListItem className={listItemStyles}>
            <span>
              <SystemIcon icon={homeIcon} />
            </span>
            {open && <ListTitle>Home</ListTitle>}
          </ListItem>
          <ListItem className={listItemStyles}>
            <span>
              <SystemIcon icon={starIcon} />
            </span>
            {open && <ListTitle>Favorites</ListTitle>}
          </ListItem>
          <ListItem className={listItemStyles}>
            <span>
              <SystemIcon icon={rocketIcon} />
            </span>
            {open && <ListTitle>Items</ListTitle>}
          </ListItem>
        </UnorderedList>
      </SidePanel>
    );
  }

  private onClick = () => {
    const threshold = window.innerWidth > 924;
    const isResponsive = (threshold && !this.state.open) || (!threshold && this.state.open);
    this.setState({
      open: !this.state.open,
      isResponsive,
    });
  };

  private handleResize = () => {
    const threshold = window.innerWidth > 924;
    if (this.state.isResponsive) {
      if (threshold && !this.state.open) {
        this.setState({
          open: true,
        });
      }
      if (!threshold && this.state.open) {
        this.setState({
          open: false,
        });
      }
    }
  };
}

storiesOf('Side Panel', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Side Panel</h1>
      <div style={{height: '67vh', position: 'relative'}}>
        <Header brandUrl="#">
          <Avatar
            onClick={() => {
              alert('clicked avatar');
            }}
          />
          <Button buttonType={Button.Types.Primary}>Sign Up</Button>
        </Header>
        <div>
          <SidePanelWrapper />
        </div>
      </div>
    </div>
  ));
