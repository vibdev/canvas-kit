/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {css, cx} from 'emotion';
import {Header, ProductHeader, DubLogoTitle} from './index';
import {Avatar} from './lib/parts';
import {HeaderTheme, HeaderVariant} from '@workday/canvas-kit-react-header/lib/shared/types';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';
import canvas from '@workday/canvas-kit-react-core';
import {Button} from '@workday/canvas-kit-react-button';
import * as chroma from 'chroma-js';
import {bgImg} from './static';
import README from './README.md';

const containerStyle = css({
  backgroundColor: canvas.colors.soap100,
  padding: canvas.spacing.m,
});

const backgroundStyle = css({
  padding: `0 0 64px 0`,
  background: `linear-gradient(${chroma(canvas.colors.blueberry400)
    .alpha(0.8)
    .css()}, ${chroma(canvas.colors.blueberry500)
    .alpha(0.8)
    .css()}), url(${bgImg})`,
  backgroundPosition: `0 50%`,
});

const buttonStyle = css({
  boxShadow: `0 0 0 2px ${canvas.colors.blueberry400}`,
  backgroundColor: `rgba(1,1,1,0)`,
  color: canvas.colors.blueberry400,
  padding: `0 ${canvas.spacing.s}`,
  fontWeight: 700,

  '&:hover': {
    backgroundColor: canvas.colors.frenchVanilla100,
    boxShadow: `0 0 0 1px ${canvas.colors.blueberry400}`,
  },
});

const buttonStyleReversed = css({
  boxShadow: `0 0 0 2px ${canvas.colors.frenchVanilla100}`,
  color: canvas.colors.frenchVanilla100,

  '&:hover': {
    boxShadow: `0 0 0 1px ${canvas.colors.frenchVanilla100}`,
    backgroundColor: `rgba(1,1,1,0.1)`,
  },
});

storiesOf('Canvas Kit/Header/App', module)
  .addDecorator(withReadme(README))
  .add('App', () => (
    <div className="story">
      <h1 className="section-label">App Header</h1>
      <h2>Work in progress - Not ready for review</h2>
      <div className={containerStyle}>
        <ProductHeader />
      </div>
    </div>
  ));
storiesOf('Canvas Kit/Header/Marketing', module)
  .addDecorator(withReadme(README))
  .add('Dub', () => (
    <div className="story">
      <h1 className="section-label">"Dub" Header</h1>
      <div className={containerStyle}>
        <Header variant={HeaderVariant.dub} title="Icons Only">
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
        <Header variant={HeaderVariant.dub} title="Kitchen Sink" theme={HeaderTheme.blue}>
          <nav>
            <ul>
              <li>
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
          variant={HeaderVariant.dub}
          title="Ignored when brand prop exists..."
          theme={HeaderTheme.white}
          brand={
            <DubLogoTitle
              title="Contained Lockup"
              theme={HeaderTheme.blue}
              bgColor={canvas.colors.gradients.blueberry}
            />
          }
        >
          <nav>
            <ul>
              <li>
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
          variant={HeaderVariant.dub}
          title="Centered Menu"
          theme={HeaderTheme.white}
          centeredNav={true}
        >
          <nav>
            <ul>
              <li>
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
        <Header variant={HeaderVariant.dub} title="Transparent" theme={HeaderTheme.transparent}>
          <nav>
            <ul>
              <li>
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
        <Header variant={HeaderVariant.full} title="Design" theme={HeaderTheme.white}>
          <nav>
            <ul>
              <li>
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
        <Header variant={HeaderVariant.full} title="Kitchen Sink" theme={HeaderTheme.blue}>
          <nav>
            <ul>
              <li>
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
        <Header variant={HeaderVariant.full} title="" theme={HeaderTheme.blue}>
          <nav>
            <ul>
              <li>
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
        <Header variant={HeaderVariant.full} title="Transparent" theme={HeaderTheme.transparent}>
          <nav>
            <ul>
              <li>
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
        <Header variant={HeaderVariant.full} title="" theme={HeaderTheme.white} centeredNav={true}>
          <nav>
            <ul>
              <li>
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
  ));
