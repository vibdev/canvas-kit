import spacing, {
  ICanvasSpacing as CanvasSpacing,
  CanvasSpacingValue,
} from '@workday/canvas-space-web';
import {CSSObject} from 'create-emotion';

export interface CanvasSpacingNumbers {
  zero: number;
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

function stripUnit(value: string): number {
  return parseInt(`${value}`.replace('px', ''), 10);
}

export const spacingNumbers: CanvasSpacingNumbers = {
  zero: stripUnit(spacing.zero),
  xxxs: stripUnit(spacing.xxxs),
  xxs: stripUnit(spacing.xxs),
  xs: stripUnit(spacing.xs),
  s: stripUnit(spacing.s),
  m: stripUnit(spacing.m),
  l: stripUnit(spacing.l),
  xl: stripUnit(spacing.xl),
  xxl: stripUnit(spacing.xxl),
  xxxl: stripUnit(spacing.xxxl),
};

export interface SpaceStyle {
  prop: string;
  direction: Array<string>;
}

const margin: SpaceStyle = {
  prop: 'margin',
  direction: ['Top', 'Right', 'Bottom', 'Left'],
};

const marginTop: SpaceStyle = {
  prop: 'margin',
  direction: ['Top'],
};

const marginRight: SpaceStyle = {
  prop: 'margin',
  direction: ['Right'],
};

const marginBottom: SpaceStyle = {
  prop: 'margin',
  direction: ['Bottom'],
};

const marginLeft: SpaceStyle = {
  prop: 'margin',
  direction: ['Left'],
};

const marginX: SpaceStyle = {
  prop: 'margin',
  direction: ['Left', 'Right'],
};

const marginY: SpaceStyle = {
  prop: 'margin',
  direction: ['Top', 'Bottom'],
};

const padding: SpaceStyle = {
  prop: 'padding',
  direction: ['Top', 'Right', 'Bottom', 'Left'],
};

const paddingTop: SpaceStyle = {
  prop: 'padding',
  direction: ['Top'],
};

const paddingRight: SpaceStyle = {
  prop: 'padding',
  direction: ['Right'],
};

const paddingBottom: SpaceStyle = {
  prop: 'padding',
  direction: ['Bottom'],
};

const paddingLeft: SpaceStyle = {
  prop: 'padding',
  direction: ['Left'],
};

const paddingX: SpaceStyle = {
  prop: 'padding',
  direction: ['Left', 'Right'],
};

const paddingY: SpaceStyle = {
  prop: 'padding',
  direction: ['Top', 'Bottom'],
};

export interface DomainProp {
  [key: string]: SpaceStyle;
}

const spacingProps: DomainProp = {
  m: margin,
  mt: marginTop,
  mr: marginRight,
  mb: marginBottom,
  ml: marginLeft,
  mx: marginX,
  my: marginY,
  p: padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingX,
  py: paddingY,
};

const spacingReg = /^[mp][trblxy]?$/;

export const space = (props: any) => {
  const keys = Object.keys(props)
    .filter(key => spacingReg.test(key))
    .sort();
  const styles = {} as CSSObject;

  keys.forEach(key => {
    const value = stripUnit(props[key]);
    const style = spacingProps[key];

    style.direction.forEach(d => {
      const cssAttribute = `${style.prop}${d}`;

      styles[cssAttribute] = `${value}px`;
    });
  });

  return styles;
};

export {CanvasSpacing, CanvasSpacingValue};

export default spacing;
