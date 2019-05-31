/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {
  activityStreamIcon,
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

import {
  IconButton,
  IconButtonToggleGroup,
  IconButtonToggleGroupProps,
  IconButtonTypes,
} from '../dist/es6';

import README from '../README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '0 12px',
  },
};

// Wrapper to add state mgmt to IconButtons
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
  state = {
    isToggled: false,
  };

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

  public handleToggle = () => {
    this.setState({isToggled: !this.state.isToggled});
  };
}

// Wrapper to add state mgmt to IconButtonToggleGroups
interface IconButtonToggleGroupWrapperState {
  selectedValue: string | number;
}

export class IconButtonToggleGroupWrapper extends React.Component<
  {},
  IconButtonToggleGroupWrapperState
> {
  state = {
    selectedValue: '',
  };

  public render() {
    const child = this.props.children as React.ReactElement<IconButtonToggleGroupProps>;
    return React.cloneElement(child, {
      value: this.state.selectedValue === '' ? child.props.value : this.state.selectedValue,
      onChange: this.handleToggle,
    });
  }

  public handleToggle = (selectedValue: string | number) => {
    this.setState({selectedValue});
  };
}

storiesOf('Buttons/Icon Buttons', module)
  .addDecorator(withReadme(README))
  .add('Square Icon Buttons', () => (
    <div className="story">
      <h1 className="section-label">Square Icon Buttons</h1>
      <h3>Medium Square</h3>
      <IconButton icon={activityStreamIcon} buttonSize={IconButton.Sizes.Medium} />
      <IconButton icon={activityStreamIcon} buttonSize={IconButton.Sizes.Medium} disabled={true} />
      <h3>Small Square</h3>
      <IconButton icon={activityStreamIcon} buttonSize={IconButton.Sizes.Small} />
      <IconButton icon={activityStreamIcon} buttonSize={IconButton.Sizes.Small} disabled={true} />
      <h3>Toggleable Square</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Square} />
    </div>
  ))
  .add('Plain Icon Buttons', () => (
    <div className="story">
      <h1 className="section-label">Plain Icon Buttons</h1>
      <h3>Medium Plain</h3>
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Plain}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Plain}
        disabled={true}
      />
      <h3>Small Plain</h3>
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.Plain}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
        buttonType={IconButton.Types.Plain}
      />
      <h3>Toggleable Plain</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Default} />
    </div>
  ))
  .add('Filled Icon Buttons', () => (
    <div className="story">
      <h1 className="section-label">Filled Icon Buttons</h1>
      <h3>Medium Filled</h3>
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Filled}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.Filled}
        disabled={true}
      />
      <h3>Small Filled</h3>
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.Filled}
      />
      <IconButton
        icon={activityStreamIcon}
        buttonSize={IconButton.Sizes.Small}
        disabled={true}
        buttonType={IconButton.Types.Filled}
      />
      <h3>Toggleable Filled</h3>
      <ToggleIconButtonWrapper buttonType={IconButton.Types.Filled} />
    </div>
  ))
  .add('Inverse Icon Buttons', () => (
    <div className="story">
      <h1 className="section-label">Inverse Icon Buttons</h1>
      <h3>Medium Inverse</h3>
      <div className={css(blueBackground)}>
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.Inverse}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.Inverse}
          disabled={true}
        />
      </div>
      <h3>Small Inverse</h3>
      <div className={css(blueBackground)}>
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Small}
          buttonType={IconButton.Types.Inverse}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Small}
          disabled={true}
          buttonType={IconButton.Types.Inverse}
        />
      </div>
      <h3>Toggleable Inverse</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.Inverse} />
      </div>
    </div>
  ))
  .add('Inverse Filled Icon Buttons', () => (
    <div className="story">
      <h1 className="section-label">Inverse Filled Icon Buttons</h1>
      <h3>Medium Inverse Filled</h3>
      <div className={css(blueBackground)}>
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.InverseFilled}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Medium}
          buttonType={IconButton.Types.InverseFilled}
          disabled={true}
        />
      </div>
      <h3>Small Inverse Filled</h3>
      <div className={css(blueBackground)}>
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Small}
          buttonType={IconButton.Types.InverseFilled}
        />
        <IconButton
          icon={activityStreamIcon}
          buttonSize={IconButton.Sizes.Small}
          disabled={true}
          buttonType={IconButton.Types.InverseFilled}
        />
      </div>
      <h3>Toggleable Inverse Filled</h3>
      <div className={css(blueBackground)}>
        <ToggleIconButtonWrapper buttonType={IconButton.Types.InverseFilled} />
      </div>
    </div>
  ))
  .add('Icon Button Groups', () => (
    <div className="story">
      <h1 className="section-label">Icon Button Groups</h1>
      <h3>With Three Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton icon={listViewIcon} />
          <IconButton icon={worksheetsIcon} />
          <IconButton icon={percentageIcon} disabled={true} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
      <h3>With Four Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup>
          <IconButton icon={listViewIcon} value="list-view" />
          <IconButton icon={worksheetsIcon} value="table-view" />
          <IconButton icon={deviceTabletIcon} value="device-view" />
          <IconButton icon={percentageIcon} value="percent-view" disabled={true} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
      <h3>Right To Left With Four Buttons</h3>
      <IconButtonToggleGroupWrapper>
        <IconButtonToggleGroup isRTL={true} value="table-view">
          <IconButton icon={listViewIcon} value="list-view" />
          <IconButton icon={worksheetsIcon} value="table-view" />
          <IconButton icon={deviceTabletIcon} value="device-view" />
          <IconButton icon={percentageIcon} value="percent-view" disabled={true} />
        </IconButtonToggleGroup>
      </IconButtonToggleGroupWrapper>
    </div>
  ));
