import React from 'react';
import { BaseCarousel } from '@components/base/carousel/BaseCarousel';

export const HomePromo: React.FC = (props) => {
  return (
    <div>
      <BaseCarousel spacing={10} columns={3}>
        <BaseCarousel.Block>123</BaseCarousel.Block>
        <BaseCarousel.Block>456</BaseCarousel.Block>
        <BaseCarousel.Block>789</BaseCarousel.Block>
      </BaseCarousel>
    </div>
  );
}