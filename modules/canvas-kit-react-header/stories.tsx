/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {css, cx} from 'emotion';
import {Header, SmallHeader, ProductHeader, DubLogoTitle} from './index'; // tslint:disable-line:import-name
import {HeaderMenuItems, HeaderSection, Avatar, HeaderIcon} from './lib/parts';
import {HeaderTheme, HeaderVariant} from '@workday/canvas-kit-react-header/lib/shared/types';
// import { SystemIcon } from '@workday/canvas-kit-react-icon';
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
  background: `linear-gradient(${chroma(canvas.colors.blueberry400)
    .alpha(0.8)
    .css()}, ${chroma(canvas.colors.blueberry400)
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
        <Header variant={HeaderVariant.dub} title="Research" theme={HeaderTheme.white}>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.white} />
          </a>
          <a href="#">
            <HeaderIcon icon={inboxIcon} theme={HeaderTheme.white} />
          </a>
          <a href="#">
            <Avatar />
          </a>
          <Button className={cx(buttonStyle)}>Register</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header variant={HeaderVariant.dub} title="Design Assets" theme={HeaderTheme.blue}>
          <HeaderMenuItems>
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
          </HeaderMenuItems>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.blue} />
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
          title="Centered Menu"
          theme={HeaderTheme.white}
          centered={true}
        >
          <HeaderMenuItems>
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
          </HeaderMenuItems>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.white} />
          </a>
          <a href="#">
            <HeaderIcon icon={inboxIcon} theme={HeaderTheme.white} />
          </a>
          <Button className={cx(buttonStyle)}>Logout</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={HeaderVariant.dub}
          title="Ignored when brand prop exists..."
          theme={HeaderTheme.white}
          centered={true}
          brand={
            <DubLogoTitle
              title="Contained Lockup"
              theme={HeaderTheme.blue}
              bgColor={canvas.colors.gradients.blueberry}
            />
          }
        >
          <HeaderMenuItems>
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
          </HeaderMenuItems>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.white} />
          </a>
          <a href="#">
            <HeaderIcon icon={inboxIcon} theme={HeaderTheme.white} />
          </a>
          <Button className={cx(buttonStyle)}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">"Full" Header</h1>
      <div className={containerStyle}>
        <Header variant={HeaderVariant.full} title="Design" theme={HeaderTheme.white}>
          <HeaderMenuItems>
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
          </HeaderMenuItems>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header variant={HeaderVariant.full} title="Kitchen Sink" theme={HeaderTheme.blue}>
          <HeaderMenuItems>
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
          </HeaderMenuItems>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.blue} />
          </a>
          <a href="#">
            <Avatar />
          </a>
          <Button className={cx(buttonStyle, buttonStyleReversed)}>Download</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header variant={HeaderVariant.full} title="" theme={HeaderTheme.white} centered={true}>
          <HeaderMenuItems>
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
          </HeaderMenuItems>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.white} />
          </a>
          <a href="#">
            <HeaderIcon icon={inboxIcon} theme={HeaderTheme.white} />
          </a>
          <Button className={cx(buttonStyle)}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Old', () => (
    <div className="story">
      <h1 className="section-label">Header</h1>
      <h2>Header</h2>
      <div className={containerStyle}>
        <Header
          title=""
          variant={HeaderVariant.full}
          theme={HeaderTheme.white}
          transparent={false}
          centered={true}
        >
          <HeaderMenuItems>
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
          </HeaderMenuItems>
          <a href="#">
            <HeaderIcon icon={notificationsIcon} />
          </a>
          <a href="#">
            <Avatar />
          </a>
          <Button className={cx(buttonStyle)}>Download</Button>
        </Header>
      </div>
      <h2>Small Header</h2>
      <div className={containerStyle}>
        <SmallHeader title="Light Theme">
          <HeaderSection>
            <HeaderMenuItems>
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
            </HeaderMenuItems>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <Button className={cx(buttonStyle)}>Download</Button>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Dark Theme" theme={HeaderTheme.blue}>
          <HeaderSection>
            <HeaderMenuItems>
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
            </HeaderMenuItems>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={inboxIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Icon Only" theme={HeaderTheme.white}>
          <HeaderSection last={true}>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.white} />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Avatar Only" theme={HeaderTheme.white}>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Avatars and Icons (Dark)" theme={HeaderTheme.blue}>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={inboxIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Avatar Only" theme={HeaderTheme.white}>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Avatars and Icons (Dark)" theme={HeaderTheme.blue}>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={inboxIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader
          title="Contained Lockup"
          theme={HeaderTheme.white}
          brand={
            <DubLogoTitle
              title="Contained Lockup"
              theme={HeaderTheme.blue}
              bgColor={canvas.colors.blueberry600}
            />
          }
        >
          <HeaderSection>
            <HeaderMenuItems>
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
            </HeaderMenuItems>
          </HeaderSection>
          <HeaderSection last={true}>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.white} />
            </a>
          </HeaderSection>
        </SmallHeader>
      </div>
      <br />
      <h3>Translucent</h3>
      <div className={cx(containerStyle, backgroundStyle)}>
        <SmallHeader theme={HeaderTheme.blue} title="Transparent" opacity={0.0}>
          <HeaderSection>
            <HeaderMenuItems>
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
            </HeaderMenuItems>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsIcon} theme={HeaderTheme.blue} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <Button className={cx(buttonStyle, buttonStyleReversed)}>Download</Button>
          </HeaderSection>
        </SmallHeader>
      </div>
      <br />
      <h2>Parts</h2>
      <div className={containerStyle}>
        <DubLogoTitle
          title="Light Lockup"
          theme={HeaderTheme.white}
          bgColor={canvas.colors.frenchVanilla100}
        />&nbsp;
        <DubLogoTitle
          title="Dark Lockup"
          theme={HeaderTheme.blue}
          bgColor={canvas.colors.blueberry600}
        />&nbsp;
        <DubLogoTitle
          title="Dark Lockup"
          theme={HeaderTheme.blue}
          bgColor={canvas.colors.gradients.blueberry}
        />&nbsp;
      </div>
      <br />
      <h2>WIP</h2>
      <h2>Product Header</h2>
      <div className={containerStyle}>
        <ProductHeader />
      </div>
      <br />
      <h2>Large Header</h2>
    </div>
  ));
