import React from 'react'

export interface IBaseCarouselProps {
  spacing?: number,
  columns?: number,
  auto?: boolean,
  showNav?: boolean,
  showArrows?: boolean,
  children?: React.ReactFragment | null,
}

export interface IBaseCarouselStyleProps extends IBaseCarouselProps {
  pages: number,
  page: number,
  isTransition?: boolean;
}

export interface IBaseCarouselSubComponents {
  Block: React.FC
}