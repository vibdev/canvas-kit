/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {Card} from '@workday/canvas-kit-react';

import Layout from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Layout', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Full Page</h1>
      <div>
        <Layout gutter={0}>
          <Layout.Column spacing={0}>
            <Card heading="Full Page Layout with no gutter & spacing" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Full Page with gutter & Spacing</h1>
      <div>
        <Layout>
          <Layout.Column>
            <Card heading="Full Page Layout with gutter & spacing " />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Full Page with content spacing</h1>
      <div>
        <Layout content={true}>
          <Layout.Column>
            <Card heading="Full Page Layout with content spacing" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Column Layouts</h1>
      <div>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 2" />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 2" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 3" />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 2" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 3" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 4" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Fixed Column Widths</h1>
      <div>
        <Layout>
          <Layout.Column columns={4}>
            <Card heading="4 Columns" />
          </Layout.Column>
          <Layout.Column columns={8}>
            <Card heading="8 Columns" />
          </Layout.Column>
        </Layout>
      </div>
    </div>
  ));
