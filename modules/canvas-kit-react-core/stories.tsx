import React from 'react'
import glamorous from 'glamorous'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'

import canvas from './index'

import README from './README.md'

storiesOf('Canvas Kit/Core', module)
  .addDecorator(withReadme(README))
  .add('Depth', () => {
    const Card = glamorous.div({
      width: 200,
      height: 200,
      margin: 20,
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })

    return (
      <div className="story">
        <h1 className="section-label">Depth</h1>
        <div style={{ display: 'flex' }}>
          <Card style={canvas.depth.inset}>Depth -1</Card>
          <Card style={canvas.depth['1']}>Depth 1</Card>
          <Card style={canvas.depth['2']}>Depth 2</Card>
          <Card style={canvas.depth['3']}>Depth 3</Card>
          <Card style={canvas.depth['4']}>Depth 4</Card>
        </div>
      </div>
    )
  })
