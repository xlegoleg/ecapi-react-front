import React from 'react';
import { BaseCarousel } from '@components/base/carousel/BaseCarousel';

export const HomePromo: React.FC = (props) => {
  return (
    <div>
      <BaseCarousel auto={true} columns={3}>
        <BaseCarousel.Block><div style={{width: '100%', height: '100px', background: 'red'}}/></BaseCarousel.Block>
        <BaseCarousel.Block><div style={{width: '100%', height: '100px', background: 'green'}}/></BaseCarousel.Block>
        <BaseCarousel.Block><div style={{width: '100%', height: '100px', background: 'blue'}}/></BaseCarousel.Block>
      </BaseCarousel>
    </div>
  );
}