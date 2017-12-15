import React from 'react'
import glamorous from 'glamorous'

import canvas from '@workday/canvas-kit-react-core'

const MyButton = glamorous.button({
  color: canvas.colors.frenchVanilla100,
})

export default () => <MyButton>Hello World</MyButton>
