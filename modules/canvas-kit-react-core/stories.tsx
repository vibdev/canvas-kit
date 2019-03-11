/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import styled, {css} from 'react-emotion';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '@workday/canvas-kit-react-common';
import canvas, {space, spacing} from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Core', module)
  .addDecorator(withReadme(README))
  .addDecorator(InputProviderDecorator)
  .add('Space', () => {
    const Box = styled('div')(space);

    return (
      <div className="story">
        <h1 className="section-label">Space</h1>
        <div>
          <Box style={{border: '1px solid #eee'}} p={spacing.xl} pb={64} m={40} mx={10}>
            Margin and Padding
          </Box>
        </div>
      </div>
    );
  })
  .add('Depth', () => {
    const Card = styled('div')({
      width: 200,
      height: 200,
      margin: 20,
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    });

    return (
      <div className="story">
        <h1 className="section-label">Depth</h1>
        <div style={{display: 'flex'}}>
          <Card style={canvas.depth.inset}>Depth -1</Card>
          <Card style={canvas.depth['1']}>Depth 1</Card>
          <Card style={canvas.depth['2']}>Depth 2</Card>
          <Card style={canvas.depth['3']}>Depth 3</Card>
          <Card style={canvas.depth['4']}>Depth 4</Card>
        </div>
      </div>
    );
  })
  .add('Type', () => {
    const inverseStyle = {
      display: 'inline-block',
      background: '#667380',
      padding: '2px 8px',
      borderRadius: '3px',
    };

    return (
      <div className="story">
        <h1 className="section-label">Type</h1>

        <section>
          <h1 style={canvas.type.h1}>H1 Header</h1>
          <h2 style={canvas.type.h2}>H2 Header</h2>
          <h3 style={canvas.type.h3}>H3 Header</h3>
          <h4 style={canvas.type.h4}>H4 Header</h4>
          <h5 style={canvas.type.h5}>H5 Header</h5>
          <p style={canvas.type.body}>
            <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
            ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
            kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim
            laboris sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid
            try-hard raw denim, thundercats salvia intelligentsia jean shorts officia. Heirloom
            craft beer put a bird on it occaecat
          </p>
          <p style={canvas.type.body2}>
            <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
            ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
            kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim
            laboris sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid
            try-hard raw denim, thundercats salvia intelligentsia jean shorts officia. Heirloom
            craft beer put a bird on it occaecat
          </p>
          <p style={canvas.type.small}>
            <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
            ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
            kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim
            laboris sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid
            try-hard raw denim, thundercats salvia intelligentsia jean shorts officia. Heirloom
            craft beer put a bird on it occaecat
          </p>
          <a href="#" className={css(canvas.type.body, canvas.type.variant.link)}>
            Link Text
          </a>
          <br />
          <span className={css(canvas.type.body, canvas.type.variant.button)}>Button Text</span>
          <br />
          <span className={css(canvas.type.body, canvas.type.variant.caps)}>Caps Text</span>
          <br />
          <label className={css(canvas.type.body, canvas.type.variant.label)}>Label Text</label>
          <br />
          <span className={css(canvas.type.body, canvas.type.variant.hint)}>Hint Text</span>
          <br />
          <span className={css(canvas.type.body, canvas.type.variant.error)}>Error Text</span>
          <br />
          <span className={css(canvas.type.body, canvas.type.variant.inverse, inverseStyle)}>
            Inverse Text
          </span>
          <br />
          <span className={css(canvas.type.body, canvas.type.variant.mono)}>Mono Text</span>
        </section>
      </div>
    );
  });
