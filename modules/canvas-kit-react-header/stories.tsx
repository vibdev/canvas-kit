/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {css, cx} from 'emotion';
import {fontFamily} from './lib/shared/styles';
import {SmallHeader, LargeHeader, ProductHeader, DubLogoTitle} from './index'; // tslint:disable-line:import-name
import {MenuItems, HeaderSection, Avatar, HeaderIcon} from './lib/parts';
import {HeaderTheme} from '@workday/canvas-kit-react-header/lib/shared/types';
// import { SystemIcon } from '@workday/canvas-kit-react-icon';
import {notificationsLargeIcon, inboxLargeIcon} from '@workday/canvas-system-icons-web';
import canvas from '@workday/canvas-kit-react-core';
import {Button} from '@workday/canvas-kit-react-button';

import README from './README.md';

const containerStyle = css({
  backgroundColor: canvas.colors.soap100,
  padding: canvas.spacing.s,
});

const pinStripes = css({
  background: `repeating-linear-gradient(45deg,
    ${canvas.colors.soap100},
    ${canvas.colors.soap100} 2px,
    ${canvas.colors.soap400} 2px,
    ${canvas.colors.soap400} 4px)`,
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

storiesOf('Canvas Kit/Header', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Header</h1>
      <h2>Small Header</h2>
      <div className={containerStyle}>
        <SmallHeader title="Light Theme">
          <HeaderSection>
            <MenuItems>
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
            </MenuItems>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsLargeIcon} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <Button className={cx(buttonStyle, fontFamily)}>Download</Button>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Dark Theme" theme={HeaderTheme.dark}>
          <HeaderSection>
            <MenuItems>
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
            </MenuItems>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsLargeIcon} theme={HeaderTheme.dark} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={inboxLargeIcon} theme={HeaderTheme.dark} />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Icon Only" theme={HeaderTheme.light}>
          <HeaderSection last={true}>
            <a href="#">
              <HeaderIcon icon={notificationsLargeIcon} theme={HeaderTheme.light} />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Avatar Only" theme={HeaderTheme.light}>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
        <SmallHeader title="Avatars and Icons (Dark)" theme={HeaderTheme.dark}>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsLargeIcon} theme={HeaderTheme.dark} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={inboxLargeIcon} theme={HeaderTheme.dark} />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
        </SmallHeader>
        <br />
      </div>
      <br />
      <h3>Translucent</h3>
      <div className={cx(containerStyle, pinStripes)}>
        <SmallHeader theme={HeaderTheme.dark} title="Translucent Header (80%)" opacity={0.8}>
          <HeaderSection>
            <MenuItems>
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
            </MenuItems>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <HeaderIcon icon={notificationsLargeIcon} theme={HeaderTheme.dark} />
            </a>
          </HeaderSection>
          <HeaderSection>
            <a href="#">
              <Avatar />
            </a>
          </HeaderSection>
          <HeaderSection last={true}>
            <Button className={cx(buttonStyle, buttonStyleReversed, fontFamily)}>Download</Button>
          </HeaderSection>
        </SmallHeader>
      </div>
      <br />
      <h2>Parts</h2>
      <div className={containerStyle}>
        <DubLogoTitle
          title="Light Lockup"
          theme={HeaderTheme.light}
          bgColor={canvas.colors.frenchVanilla100}
        />&nbsp;
        <DubLogoTitle
          title="Dark Lockup"
          theme={HeaderTheme.dark}
          bgColor={canvas.colors.blueberry600}
        />&nbsp;
        <DubLogoTitle
          title="Dark Lockup"
          theme={HeaderTheme.dark}
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
      <div className={containerStyle}>
        <LargeHeader title="Light Theme" mode="primary" />
        <br />
        <LargeHeader
          title="Dark Theme"
          mode="secondary"
          bgColor={canvas.colors.gradients.blueberry}
        />
      </div>
      <br />
    </div>
  ));
