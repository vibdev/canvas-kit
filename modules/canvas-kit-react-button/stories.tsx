import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'

import Button from './index.tsx'
import README from './README.md'

storiesOf('Canvas Kit/Button', module)
	.addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Button</h1>
      <Button></Button>
    </div>
  ))
