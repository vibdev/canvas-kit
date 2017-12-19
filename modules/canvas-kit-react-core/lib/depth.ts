import colors from './colors'

const constants = {
  shadowColorLight: 'rgba(82, 97, 115, 0.14)',
  shadowColor: 'rgba(82, 97, 115, 0.18)',
  baseOffset: 2,
  baseBlurRadius: 4,
}

const depth = {
  inset: {
    'box-shadow': `inset 0 0 ${constants.baseBlurRadius * 2}px ${constants.shadowColorLight}`,
  },
  1: {
    'box-shadow': `0 ${constants.baseOffset}px ${constants.baseBlurRadius}px ${
      constants.shadowColorLight
    }`,
  },
  2: {
    'box-shadow': `0 ${constants.baseOffset * 2}px ${constants.baseBlurRadius * 2}px ${
      constants.shadowColor
    }`,
  },
  3: {
    'box-shadow': `0 ${constants.baseOffset * 4}px ${constants.baseBlurRadius * 4}px ${
      constants.shadowColor
    }`,
  },
  4: {
    border: `1px solid ${colors.soap500}`,
    'box-shadow': `0 ${constants.baseOffset * 4}px ${constants.baseBlurRadius * 4}px ${
      constants.shadowColor
    }`,
  },
}

export default depth
