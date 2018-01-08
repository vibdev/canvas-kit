import colors from './colors'

const shadow: { [x: string]: string } = {
  shadowColorLight: 'rgba(82, 97, 115, 0.14)',
  shadowColor: 'rgba(82, 97, 115, 0.18)',
}

const sizing: { [x: string]: number } = {
  baseOffset: 2,
  baseBlurRadius: 4,
}

const depth: { [x: string]: Object } = {
  inset: {
    boxShadow: `inset 0 0 ${sizing.baseBlurRadius * 2}px ${shadow.shadowColorLight}`,
  },
  1: {
    boxShadow: `0 ${sizing.baseOffset}px ${sizing.baseBlurRadius}px ${shadow.shadowColorLight}`,
  },
  2: {
    boxShadow: `0 ${sizing.baseOffset * 2}px ${sizing.baseBlurRadius * 2}px ${shadow.shadowColor}`,
  },
  3: {
    boxShadow: `0 ${sizing.baseOffset * 4}px ${sizing.baseBlurRadius * 4}px ${shadow.shadowColor}`,
  },
  4: {
    border: `1px solid ${colors.soap500}`,
    boxShadow: `0 ${sizing.baseOffset * 4}px ${sizing.baseBlurRadius * 4}px ${shadow.shadowColor}`,
  },
}

export default depth
