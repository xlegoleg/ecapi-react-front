import React from 'react'

export interface IBaseCarouselProps {
  items?: any,
  spacing?: number,
  columns?: number,
  auto?: boolean,
  showNavButtons?: boolean,
  showIndicators?: boolean,
  children?: React.ReactFragment | null,
}

export interface IBaseCarouselStyleProps extends IBaseCarouselProps {
  pages: number,
  page: number
}

export interface IBaseCarouselSubComponents {
  Block: React.FC
}