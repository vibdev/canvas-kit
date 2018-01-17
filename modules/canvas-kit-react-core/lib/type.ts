import { CSSProperties } from './types' // eslint-disable-line no-unused-vars
import colors from './colors'
import fonts from './fonts'

/* eslint-disable no-undef, no-use-before-define */
export interface CanvasType {
  body: CSSProperties
  body2: CSSProperties
  h1: CSSProperties
  h2: CSSProperties
  h3: CSSProperties
  h4: CSSProperties
  h5: CSSProperties
  label1: CSSProperties
  label2: CSSProperties
  label3: CSSProperties
  link: CSSProperties
  button: CSSProperties
  hint: CSSProperties
}
/* eslint-enable no-undef, no-use-before-define */

const { fontFamily } = fonts

const body: CSSProperties = {
  fontSize: '14px',
  color: colors.blackPepper300,
  fontWeight: 400,
  lineHeight: '16px',
}

const body2: CSSProperties = {
  ...body,
  fontSize: '13px',
}

const h1: CSSProperties = {
  fontWeight: 500,
  fontSize: '28px',
  lineHeight: '36px',
  color: colors.blackPepper400,
}

const h2: CSSProperties = {
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '32px',
  color: colors.blackPepper400,
}

const h3: CSSProperties = {
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '24px',
  color: colors.blackPepper400,
}

const h4: CSSProperties = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: colors.blackPepper400,
}

const h5: CSSProperties = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',
  color: colors.blackPepper400,
}

const label1: CSSProperties = {
  ...body,
  fontWeight: 500,
}

const label2: CSSProperties = {
  ...label1,
  fontSize: '13px',
}

const label3: CSSProperties = {
  ...label1,
  fontSize: '10px',
}

const link: CSSProperties = {
  textDecoration: 'none',
  color: colors.blueberry500,
  '&:hover, &:active': {
    textDecoration: 'underline',
    color: colors.blueberry500,
  },
  '&:focus': {
    background: colors.blueberry100,
    textDecoration: 'underline',
    outline: 'none',
  },
}

const button: CSSProperties = {
  margin: 0,
  fontWeight: 500,
  fontSize: '14px',
  letterSpacing: '0.5px',
}

const hint: CSSProperties = {
  fontSize: '13px',
  fontWeight: 400,
  color: colors.licorice100,
}

const type: CanvasType = {
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
}

Object.keys(type).forEach(key => {
  type[key] = Object.assign({}, type[key], { fontFamily })
})

export default type
