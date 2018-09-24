import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';
import {ButtonTypes, ButtonSizes} from '../types';

describe('Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Button>Button</Button>);
    expect(component).toMatchSnapshot();
  });
  test('renders a large, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a button with no type defined', () => {
    const component = renderer.create(<Button buttonType={undefined}>Button</Button>);
    expect(component).toMatchSnapshot();
  });

  test('renders a growing button', () => {
    const component = renderer.create(<Button grow={true}>Button</Button>);
    expect(component).toMatchSnapshot();
  });
});
