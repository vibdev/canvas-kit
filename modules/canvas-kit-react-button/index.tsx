import React from 'react'
import glamorous from 'glamorous'
import canvas from '@workday/canvas-kit-react-core'

const MyButton = glamorous.button(canvas.type.button)

export default () => <MyButton>Hello World</MyButton>
