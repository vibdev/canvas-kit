/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {css, cx} from 'emotion';
import {Header, DubLogoTitle} from './index';
import {Avatar} from './lib/parts';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {Button} from '@workday/canvas-kit-react-button';
import * as chroma from 'chroma-js';
import README from './README.md';
import bgImg from './static/workday-bg.jpg';

const containerStyle = css({
  backgroundColor: colors.soap100,
  padding: spacing.m,
});

const backgroundStyle = css({
  padding: `0 0 64px 0`,
  background: `linear-gradient(${chroma(colors.blueberry500)
    .alpha(0.8)
    .css()}, ${chroma(colors.blueberry400)
    .alpha(0.8)
    .css()}), url(${bgImg})`,
  backgroundPosition: `0 50%`,
});

// TODO: remove buttonStyle and buttonStyleReversed when we actually launch new UDE buttons
const buttonStyle = css({
  boxShadow: `0 0 0 2px ${colors.blueberry400}`,
  backgroundColor: `rgba(1,1,1,0)`,
  color: colors.blueberry400,
  padding: `0 ${spacing.s}`,
  fontWeight: 700,

  '&:hover': {
    color: colors.blueberry400,
    backgroundColor: colors.frenchVanilla100,
    boxShadow: `0 0 0 1px ${colors.blueberry400}`,
  },
});

const buttonStyleReversed = css({
  boxShadow: `0 0 0 2px ${colors.frenchVanilla100}`,
  color: colors.frenchVanilla100,

  '&:hover': {
    color: colors.frenchVanilla100,
    boxShadow: `0 0 0 1px ${colors.frenchVanilla100}`,
    backgroundColor: `rgba(1,1,1,0.1)`,
  },
});

const handleClickTest = (e: React.SyntheticEvent) => {
  alert(`Menu clicked!`);
};

storiesOf('Canvas Kit/Header/Marketing', module)
  .addDecorator(withReadme(README))
  .add('Dub', () => (
    <div className="story">
      <h1 className="section-label">"Dub" Header</h1>
      <div className={containerStyle}>
        <Header title="Required" />
      </div>
      <div className={containerStyle}>
        <Header title="Icons Only" brandUrl="#">
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <SystemIcon icon={inboxIcon} />
          </a>
          <a href="#">
            <Avatar />
          </a>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          title="Kitchen Sink"
          themeColor={Header.Theme.Blue}
          brandUrl="#"
          handleMenuClick={handleClickTest}
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <Avatar />
          </a>
          <Button className={cx(buttonStyle, buttonStyleReversed)}>Download</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Dub}
          title="Ignored when brand prop exists..."
          themeColor={Header.Theme.White}
          brand={
            <DubLogoTitle
              title="Contained Lockup"
              themeColor={Header.Theme.Blue}
              bgColor={colors.gradients.blueberry}
            />
          }
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <SystemIcon icon={inboxIcon} />
          </a>
          <Button className={cx(buttonStyle)}>Logout</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Dub}
          title="Centered Menu"
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <SystemIcon icon={inboxIcon} />
          </a>
          <Button className={cx(buttonStyle)}>Logout</Button>
        </Header>
      </div>
      <br />
      <div className={cx(containerStyle, backgroundStyle)}>
        <Header
          variant={Header.Variant.Dub}
          title="Transparent"
          themeColor={Header.Theme.Transparent}
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <SystemIcon icon={inboxIcon} />
          </a>
          <Button className={cx(buttonStyle, buttonStyleReversed)}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">"Full" Header</h1>
      <div className={containerStyle}>
        <Header variant={Header.Variant.Full} />
      </div>
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title="Design"
          themeColor={Header.Theme.White}
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title="Kitchen Sink"
          themeColor={Header.Theme.Blue}
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <Avatar />
          </a>
          <Button className={cx(buttonStyle, buttonStyleReversed)}>Download</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header variant={Header.Variant.Full} title="" themeColor={Header.Theme.Blue} brandUrl="#">
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <Avatar />
          </a>
        </Header>
      </div>
      <br />
      <div className={cx(containerStyle, backgroundStyle)}>
        <Header
          variant={Header.Variant.Full}
          title="Transparent"
          themeColor={Header.Theme.Transparent}
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <Avatar />
          </a>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title=""
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
        >
          <nav>
            <ul>
              <li className="current">
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Manage</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <SystemIcon icon={inboxIcon} />
          </a>
          <Button className={cx(buttonStyle)}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Custom Breakpoints', () => (
    <div className="story">
      <h1 className="section-label">Custom Breakpoints</h1>
      <Header
        title="Normal Breakpoints"
        themeColor={Header.Theme.Blue}
        brandUrl="#"
        handleMenuClick={handleClickTest}
      >
        <nav>
          <ul>
            <li className="current">
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Manage</a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <SystemIcon icon={notificationsIcon} />
        </a>
        <a href="#">
          <Avatar />
        </a>
        <Button className={cx(buttonStyle, buttonStyleReversed)}>Download</Button>
      </Header>
      <Header title="Nav Collapses Later" breakpoints={{sm: 320, md: 420, lg: 768}}>
        <nav>
          <ul>
            <li className="current">
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Manage</a>
            </li>
          </ul>
        </nav>
      </Header>
      <Header title="Nav Collapses Earlier" breakpoints={{sm: 320, md: 768, lg: 1280}}>
        <nav>
          <ul>
            <li className="current">
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Manage</a>
            </li>
            <li>
              <a href="#">Contributors</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <SystemIcon icon={notificationsIcon} />
        </a>
        <a href="#">
          <Avatar />
        </a>
        <Button className={cx(buttonStyle, buttonStyle)}>Download</Button>
      </Header>
      <Header
        title="Icons Drop Later"
        breakpoints={{...Header.defaultProps.breakpoints, md: 640, lg: 1140}}
      >
        <a href="#">
          <SystemIcon icon={notificationsIcon} />
        </a>
        <a href="#">
          <SystemIcon icon={inboxIcon} />
        </a>
        <Button className={cx(buttonStyle)}>Logout</Button>
      </Header>
    </div>
  ));
