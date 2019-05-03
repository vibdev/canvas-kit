import * as React from 'react';

export default class ControlledComponentWrapper extends React.Component<any, {}> {
  static defaultProps = {
    value: '',
  };

  state = {
    value: this.props.value,
  };

  onChange = (e: React.SyntheticEvent | string | number) => {
    const value =
      typeof e === 'object' ? (e as React.ChangeEvent<HTMLInputElement>).currentTarget.value : e;
    this.setState({value});
  };

  renderChildren = (child: React.ReactNode) => {
    if (React.isValidElement<any>(child)) {
      const {children, ...props} = this.props;
      const childProps = {
        ...props,
        ...child.props,
        value: this.state.value,
        onChange: this.onChange,
      };
      return React.cloneElement(child, childProps);
    }
    return child;
  };

  public render() {
    return React.Children.map(this.props.children, this.renderChildren);
  }
}

export const controlComponent = (child: React.ReactNode, controlledValueProp?: string) => {
  return (
    <ControlledComponentWrapper controlledValueProp={controlledValueProp}>
      {child}
    </ControlledComponentWrapper>
  );
};
