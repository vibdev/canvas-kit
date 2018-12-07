import * as React from 'react';
import {css, cx} from 'emotion';
import {colors} from '@workday/canvas-kit-react-core';

interface ToggleSwitchProps {
  isChecked: boolean;
  className?: string;
  onClick: () => void;
  toggleBackgroundColor?: string;
}

const backgroundCss = css({
  width: 32,
  height: 16,
  backgroundColor: colors.soap400,
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 0.25s linear',
  padding: '0px 2px',
  boxSizing: 'border-box',
});

const labelCss = css({
  display: 'inline-block',
});

const circleCss = css({
  width: 12,
  height: 12,
  borderRadius: 100,
  boxShadow: '0 2px 4px 0 rgba(82, 97, 115, 0.14)',
  backgroundColor: colors.frenchVanilla100,
  transform: 'translateX(0px)',
  transition: 'transform 0.25s linear',
});

const cirlceActiveCss = css({
  transform: 'translateX(16px)', // slider width - circle width
});

const inputCss = css({
  opacity: 0,
  position: 'absolute',
});

export default class ToggleSwitch extends React.Component<ToggleSwitchProps> {
  public render() {
    const {onClick, className, isChecked} = this.props;
    const backgroundActive = css({
      backgroundColor: this.props.toggleBackgroundColor || colors.blueberry500,
    });
    return (
      <label className={cx(labelCss, className)}>
        <input
          className={inputCss}
          type="checkbox"
          defaultChecked={isChecked}
          onChange={onClick}
          tabIndex={0}
        />
        <div className={cx(backgroundCss, isChecked && backgroundActive)}>
          <div className={cx(circleCss, isChecked && cirlceActiveCss)} />
        </div>
      </label>
    );
  }
}
