import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Floating Action Toolbar', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar</h1>

      <div className="demo-fat-container">
        <div className="wdc-fat demo-fat-custom">
          <div className="wdc-fat-container">
            <button className="wdc-btn wdc-btn-primary">Button</button>
            <button className="wdc-btn">Button</button>
            <button className="wdc-btn">Button</button>
          </div>
        </div>

        <div className="wdc-fat demo-fat-custom">
          <div className="wdc-fat-container">
            <button className="wdc-btn wdc-btn-primary">Next</button>
            <button className="wdc-btn">Back</button>
          </div>
        </div>

        <div className="wdc-fat demo-fat-custom">
          <div className="wdc-fat-container">
            <button className="wdc-btn wdc-btn-primary">Done</button>
          </div>
        </div>

        <div className="wdc-fat demo-fat-custom">
          <div className="wdc-fat-container">
            <button className="wdc-btn wdc-btn-primary">Done</button>
            <button className="wdc-btn wdc-btn-icon-rounded wdc-fat-container-item-natural">
              <SystemIcon icon={relatedActionsIcon} />
            </button>
          </div>
        </div>

        <div className="wdc-fat demo-fat-custom">
          <div className="wdc-fat-container">
            <button className="wdc-btn wdc-btn-primary">Button</button>
            <button className="wdc-btn">Button</button>
            <button className="wdc-btn">Button</button>
            <button className="wdc-btn wdc-btn-icon-rounded wdc-fat-container-item-natural">
              <SystemIcon icon={relatedActionsIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
