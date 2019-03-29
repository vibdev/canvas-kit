import * as React from 'react';
import styled from 'react-emotion';
import Radio, {RadioProps} from './Radio';

export interface RadioGroupProps {
  /**
   * React children must be of type Radio and have at least two.
   */
  children: React.ReactElement<Radio>[];

  /**
   * The value or index of the Radio that should be toggled on.
   * If a string is passed, the Radio with the corresponding value will be selected.
   * If a number is passed, ihe Radio with the corresponding index will be selected.
   */
  value?: string | number;

  /**
   * Internationalization config
   */
  isRTL?: boolean;

  /**
   * Callback function when a button is selected, optional.
   * If the selected button has a value, it will be returned.
   * Otherwise, the index of the button in the group will be returned.
   */
  onChange?: (value: string | number) => void;
}

const Container = styled('div')({});

export default class RadioGroup extends React.Component<RadioGroupProps> {
  static defaultProps = {
    value: 0,
  };

  render(): React.ReactNode {
    const children = this.props.isRTL ? [...this.props.children].reverse() : this.props.children;
    return <Container>{React.Children.map(children, this.renderChild)}</Container>;
  }

  private renderChild = (child: React.ReactElement<RadioProps>, index: number): React.ReactNode => {
    if (typeof child.type === typeof Radio) {
      const childProps = child.props;
      const checked =
        typeof this.props.value === 'number'
          ? index === this.props.value
          : childProps.value === this.props.value;

      return React.cloneElement(child, {
        checked,
        onClick: this.onButtonClick.bind(this, childProps.onClick, index),
      });
    }

    return child;
  };

  private onButtonClick = (
    existingOnClick: (e: React.SyntheticEvent) => void | undefined,
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (existingOnClick) {
      existingOnClick(event);
    }

    const target = event.currentTarget;
    if (target && this.props.onChange) {
      if (target.value) {
        this.props.onChange(target.value);
      } else {
        this.props.onChange(index);
      }
    }
  };
}
