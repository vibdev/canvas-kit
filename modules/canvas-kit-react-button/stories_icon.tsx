/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

import {IconButton} from './index'; // tslint:disable-line:import-name
import {IconButtonTypes} from './lib/types';
import README from './README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

interface ToggleIconButtonWrapperState {
  isToggled: boolean;
}

interface ToggleIconButtonWrapperProps {
  buttonType: IconButtonTypes;
}

class ToggleIconButtonWrapper extends React.Component<
  ToggleIconButtonWrapperProps,
  ToggleIconButtonWrapperState
> {
  public constructor(props: ToggleIconButtonWrapperProps) {
    super(props);
    this.state = {
      isToggled: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  public render() {
    return (
      <IconButton
        toggled={this.state.isToggled}
        buttonType={this.props.buttonType}
        onClick={this.handleToggle}
      >
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
  }

  public handleToggle() {
    this.setState({isToggled: !this.state.isToggled});
  }
}

// TODO (beta button): remove this story, edit storybook config to not accept stories*.tsx
// TODO (beta button): remove stories_beta.tsx from tsconfig.json in this module
const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
};

storiesOf('Canvas Kit/Button/Beta', module)
  .addDecorator(withReadme(README))
  .add('Icon Buttons', () => (
    <div className="story">
      <h1 className="section-label">Icon Buttons</h1>
      <h3>Primary Icon Buttons</h3>
      <IconButton buttonType={IconButton.Types.IconPrimary}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <br />
      <IconButton disabled={true} buttonType={IconButton.Types.IconPrimary}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <h3>Primary Filled Icon Buttons</h3>
      <IconButton buttonType={IconButton.Types.IconPrimaryFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <br />
      <IconButton disabled={true} buttonType={IconButton.Types.IconPrimaryFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <h3>Inversed Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <IconButton buttonType={IconButton.Types.IconInverse}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <br />
      <div className={css(blueBackground)}>
        <IconButton disabled={true} buttonType={IconButton.Types.IconInverse}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <h3>Inverse Filled Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <IconButton buttonType={IconButton.Types.IconInverseFilled}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <br />
      <div className={css(blueBackground)}>
        <IconButton disabled={true} buttonType={IconButton.Types.IconInverseFilled}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <h1 className="section-label">Icon Button Toggles</h1>
      <h3>Primary Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.IconPrimary} />
      <h3>Primary Filled Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.IconPrimaryFilled} />
      <h3>Inversed Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.IconInverse} />
      </div>
      <h3>Inverse Filled Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.IconInverseFilled} />
      </div>
    </div>
  ));
