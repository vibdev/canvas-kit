import * as React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'react-emotion';
import Skeleton from './lib/skeleton';
import SkeletonShape from './lib/parts/skeletonShape';
import {number} from '@storybook/addon-knobs';
import SkeletonText from './lib/parts/skeletonText';
import SkeletonHeader from './lib/parts/skeletonHeader';

const Container = styled('span')({
  width: '60%',
  height: '100%',
  margin: '8px',
});

const FlexContainer = styled('div')({
  display: 'flex',
});

storiesOf('Canvas Kit/Skeleton', module)
  .add('Skeleton', () => {
    return (
      <Skeleton>
        <FlexContainer>
          <SkeletonShape width={50} height={50} borderRadius={99} />
          <Container>
            <SkeletonHeader />
          </Container>
        </FlexContainer>
        <div>
          <SkeletonText lineCount={3} />
        </div>
      </Skeleton>
    );
  })
  .add('Parts/SkeletonShape', () => {
    return (
      <SkeletonShape
        width={number('width', 100)}
        height={number('height', 100)}
        borderRadius={number('borderRadius', 99)}
      />
    );
  })
  .add('Parts/SkeletonText', () => {
    return <SkeletonText lineCount={number('lineCount', 2)} />;
  })
  .add('Parts/SkeletonHeader', () => {
    return <SkeletonHeader />;
  });
