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
  .add('Type', () => (
    <div className="story">
      <h1 className="section-label">Type</h1>
      <h1 style={canvas.type.h1}>H1 Header</h1>
      <h2 style={canvas.type.h2}>H2 Header</h2>
      <h3 style={canvas.type.h3}>H3 Header</h3>
      <h4 style={canvas.type.h4}>H4 Header</h4>
      <h5 style={canvas.type.h5}>H5 Header</h5>
      <p style={canvas.type.body}>
        <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
        Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch
        next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
        sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
        denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird
        on it occaecat
      </p>
      <p style={canvas.type.body2}>
        <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
        ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
        kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
        sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
        denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird
        on it occaecat
      </p>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a href="#" style={canvas.type.link}>
        Link Text
      </a>{' '}
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
      <br />
      <span style={canvas.type.hint}>Hint Text</span>
      <br />
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label style={canvas.type.label1}>Label 1</label>
      <br />
      <label style={canvas.type.label2}>Label 2</label>
      <br />
      <label style={canvas.type.label3}>Label 3</label>
      {/* eslint-enable jsx-a11y/label-has-for */}
    </div>
  ))