import {injectGlobal} from 'emotion';
import {CSSObject} from 'create-emotion';

export interface CanvasFonts {
  fontFamily: string;
  monoFontFamily: string;
}

function createFontFace(font: CSSObject): CSSObject {
  return {
    '@font-face': font,
  };
}

const fontsPath = 'https://design.workdaycdn.com/beta/assets/fonts@1.0.0/roboto/ttf';
const fontFamily = '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';
const monoFontFamily = '"Roboto Mono", "Courier New", Courier, monospace';
const fonts = [
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 300,
    src: `local('Roboto Light'), local('Roboto-Light'), url(${fontsPath}/Roboto-Light.ttf) format('truetype')`,
  },
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `local('Roboto Regular'), local('Roboto-Regular'), url(${fontsPath}/Roboto-Regular.ttf) format('truetype')`,
  },
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `local('Roboto Medium'), local('Roboto-Medium'), url(${fontsPath}/Roboto-Medium.ttf) format('truetype')`,
  },
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    src: `local('Roboto Bold'), local('Roboto-Bold'), url(${fontsPath}/Roboto-Bold.ttf) format('truetype')`,
  },
  {
    fontFamily: 'Roboto Mono',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `local('Roboto Mono'), local('RobotoMono-Regular'), url(${fontsPath}/RobotoMono-Regular.ttf) format('truetype')`,
  },
];
injectGlobal(fonts.map(font => createFontFace(font)));

const canvasFonts: CanvasFonts = {fontFamily, monoFontFamily};

export default canvasFonts;
