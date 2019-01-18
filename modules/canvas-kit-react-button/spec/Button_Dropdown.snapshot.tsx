import * as React from 'react';
import * as renderer from 'react-test-renderer';
import DropdownButton from '../lib/DropdownButton';

describe('Button (Dropdown) Snapshots', () => {
  test('renders a large, dropdown primary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.UdePrimary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, dropdown primary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.UdePrimary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, dropdown secondary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.UdeSecondary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, dropdown secondary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.UdeSecondary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });
});
