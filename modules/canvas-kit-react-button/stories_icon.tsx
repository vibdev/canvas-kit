/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {activityStreamIcon, xIcon} from '@workday/canvas-system-icons-web';
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

export class ToggleIconButtonWrapper extends React.Component<
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
        icon={activityStreamIcon}
      />
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

storiesOf('Canvas Kit/Button/Icon Buttons', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Icon Buttons</h1>
      <h3>Square Icon Buttons</h3>
      <IconButton icon={activityStreamIcon} buttonSize={IconButton.Sizes.Medium} />
      <br />
      <IconButton icon={activityStreamIcon} />
      <br />
      <IconButton disabled={true}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <h3>Plain Icon Buttons</h3>
      <div>
        <IconButton buttonType={IconButton.Types.Plain}>
          <SystemIcon icon={xIcon} />
        </IconButton>
        <br />
        <IconButton buttonType={IconButton.Types.Plain} buttonSize={IconButton.Sizes.Small}>
          <SystemIcon icon={xIcon} />
        </IconButton>
        <br />
        <IconButton disabled={true} buttonType={IconButton.Types.Plain}>
          <SystemIcon icon={xIcon} />
        </IconButton>
      </div>
      <h3>Default Icon Buttons</h3>
      <IconButton buttonType={IconButton.Types.Default}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <br />
      <IconButton buttonType={IconButton.Types.Default} buttonSize={IconButton.Sizes.Small}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <br />
      <IconButton disabled={true} buttonType={IconButton.Types.Default}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <h3>Filled Icon Buttons</h3>
      <IconButton buttonType={IconButton.Types.Filled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <br />
      <IconButton buttonType={IconButton.Types.Filled} buttonSize={IconButton.Sizes.Small}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <br />
      <IconButton disabled={true} buttonType={IconButton.Types.Filled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
      <h3>Inverse Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <IconButton buttonType={IconButton.Types.Inverse}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <br />
      <div className={css(blueBackground)}>
        <IconButton buttonType={IconButton.Types.Inverse} buttonSize={IconButton.Sizes.Small}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <br />
      <div className={css(blueBackground)}>
        <IconButton disabled={true} buttonType={IconButton.Types.Inverse}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <h3>Inverse Filled Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <IconButton buttonType={IconButton.Types.InverseFilled}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <br />
      <div className={css(blueBackground)}>
        <IconButton buttonType={IconButton.Types.InverseFilled} buttonSize={IconButton.Sizes.Small}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <br />
      <div className={css(blueBackground)}>
        <IconButton disabled={true} buttonType={IconButton.Types.InverseFilled}>
          <SystemIcon icon={activityStreamIcon} />
        </IconButton>
      </div>
      <h1 className="section-label">Icon Button Toggles</h1>
      <h3>Square Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Square} />
      <h3>Default Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Default} />
      <h3>Filled Icon Buttons</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Filled} />
      <h3>Inverse Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.Inverse} />
      </div>
      <h3>Inverse Filled Icon Buttons</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.InverseFilled} />
      </div>
    </div>
  ));
