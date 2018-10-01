import canvasColorsWeb from '@workday/canvas-colors-web';
import {CSSProperties} from './types';

export const fontFamily = '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';
export const monoFontFamily = '"Roboto Mono", "Courier New", Courier, monospace';

export interface CanvasTypeVariations {
  body: CSSProperties;
  body2: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  label1: CSSProperties;
  label2: CSSProperties;
  label3: CSSProperties;
  link: CSSProperties;
  button: CSSProperties;
  hint: CSSProperties;
  [key: string]: CSSProperties;
}

export interface CanvasType extends CanvasTypeVariations {
  mono: CanvasTypeVariations;
  [key: string]: CanvasTypeVariations | CSSProperties;
}

const body: CSSProperties = {
  fontSize: '14px',
  color: canvasColorsWeb.blackPepper300,
  fontWeight: 400,
  lineHeight: '16px',
};

const body2: CSSProperties = {
  ...body,
  fontSize: '13px',
} as CSSProperties;

const h1: CSSProperties = {
  fontWeight: 500,
  fontSize: '28px',
  lineHeight: '36px',
  color: canvasColorsWeb.blackPepper400,
};

const h2: CSSProperties = {
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '32px',
  color: canvasColorsWeb.blackPepper400,
};

const h3: CSSProperties = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '24px',
  color: canvasColorsWeb.blackPepper400,
};

const h4: CSSProperties = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '20px',
  color: canvasColorsWeb.blackPepper400,
};

const h5: CSSProperties = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',
  color: canvasColorsWeb.blackPepper400,
};

const label1: CSSProperties = {
  ...body,
  fontWeight: 500,
} as CSSProperties;

const label2: CSSProperties = {
  ...label1,
  fontSize: '13px',
} as CSSProperties;

const label3: CSSProperties = {
  ...label1,
  fontSize: '10px',
} as CSSProperties;

const link: CSSProperties = {
  textDecoration: 'none',
  color: canvasColorsWeb.blueberry500,
  '&:hover, &:active': {
    textDecoration: 'underline',
    color: canvasColorsWeb.blueberry500,
  },
  '&:focus': {
    background: canvasColorsWeb.blueberry100,
    textDecoration: 'underline',
    outline: 'none',
  },
};

const button: CSSProperties = {
  margin: 0,
  fontWeight: 500,
  fontSize: '14px',
  letterSpacing: '0.5px',
};

const hint: CSSProperties = {
  fontSize: '13px',
  fontWeight: 400,
  color: canvasColorsWeb.licorice100,
};

const typeVariations: CanvasTypeVariations = {
  body,
  body2,
  h1,
  h2,
  h3,
  h4,
  h5,
  label1,
  label2,
  label3,
  link,
  button,
  hint,
};

// Override font family for mono type
const mono: CanvasTypeVariations = typeVariations;
Object.keys(mono).forEach(variation => {
  mono[variation].fontFamily = monoFontFamily;
});

const type: CanvasType = {
  ...typeVariations,
  mono,
};

Object.keys(type).forEach(key => {
  if (key === 'mono') {
    return;
  }
  type[key] = {...type[key], fontFamily} as CSSProperties;
});

export default type;
