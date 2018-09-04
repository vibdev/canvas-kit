import canvasColorsWeb from '@workday/canvas-colors-web';
import {CSSProperties} from './types';

export const fontFamily = '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';
export const monoFontFamily = '"Roboto Mono", "Courier New", Courier, monospace';

export interface CanvasTypeHierarchy {
  dataViz1: CSSProperties;
  dataViz2: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  body: CSSProperties;
  body2: CSSProperties;
  small: CSSProperties;
}

export interface CanvasTypeVariant {
  label: CSSProperties;
  button: CSSProperties;
  caps: CSSProperties;
  hint: CSSProperties;
  error: CSSProperties;
  inverse: CSSProperties;
  mono: CSSProperties;
  link: CSSProperties;
}

export interface CanvasType extends CanvasTypeHierarchy {
  variant: CanvasTypeVariant;
  [key: string]: CSSProperties;
}

export interface CanvasType extends CanvasTypeVariations {
  mono: CanvasTypeVariations;
  [key: string]: CanvasTypeVariations | CSSProperties;
}

// Data Viz
const dataViz1: CSSProperties = {
  fontSize: '56px',
  color: typeColors.heading,
  fontWeight: 300,
  lineHeight: '68px',
};

const dataViz2: CSSProperties = {
  fontSize: '34px',
  color: typeColors.heading,
  fontWeight: 300,
  lineHeight: '40px',
};

// Headers
const h1: CSSProperties = {
  fontWeight: 500,
  fontSize: '28px',
  lineHeight: '36px',
  color: typeColors.heading,
};

const h2: CSSProperties = {
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '32px',
  color: typeColors.heading,
};

const h3: CSSProperties = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '28px',
  color: typeColors.heading,
};

const h4: CSSProperties = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '23px',
  color: typeColors.heading,
};

const h5: CSSProperties = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '23px',
  color: typeColors.heading,
};

// Body
const body: CSSProperties = {
  fontSize: '14px',
  color: typeColors.body,
  fontWeight: 400,
  lineHeight: '20px',
};

const body2: CSSProperties = {
  ...body,
  fontSize: '13px',
} as CSSProperties;

const small: CSSProperties = {
  ...body,
  fontSize: '12px',
  lineHeight: '16px',
} as CSSProperties;

// Variations
const label: CSSProperties = {
  fontWeight: 500,
} as CSSProperties;

const button: CSSProperties = {
  fontWeight: 500,
} as CSSProperties;

const caps: CSSProperties = {
  fontWeight: 500,
  textTransform: 'uppercase',
} as CSSProperties;

const hint: CSSProperties = {
  color: typeColors.hint,
} as CSSProperties;

const error: CSSProperties = {
  color: statusColors.error,
} as CSSProperties;

const inverse: CSSProperties = {
  color: typeColors.inverse,
};

const mono: CSSProperties = {
  fontFamily: fonts.monoFontFamily,
};

const link: CSSProperties = {
  textDecoration: 'none',
  color: typeColors.link,
  cursor: 'pointer',
  '&:hover, &:active': {
    textDecoration: 'underline',
    color: typeColors.link,
  },
  '&:focus': {
    background: canvasColors.blueberry100,
    textDecoration: 'underline',
    outline: `2px solid ${canvasColors.blueberry100}`,
  },
};

const type: CanvasType = {
  dataViz1,
  dataViz2,
  h1,
  h2,
  h3,
  h4,
  h5,
  body,
  body2,
  small,
  variant: {
    label,
    button,
    caps,
    hint,
    error,
    inverse,
    mono,
    link,
  },
};

Object.keys(type).forEach(key => {
  if (key === 'mono') {
    return;
  }
  type[key] = {...type[key], fontFamily} as CSSProperties;
});

export default type;
