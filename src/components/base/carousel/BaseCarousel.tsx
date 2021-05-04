import React from 'react';
import { IconButton } from '@material-ui/core';
import { useStyles } from './BaseCarouselStyle';
import { IBaseCarouselProps, IBaseCarouselSubComponents } from '@interfaces/components/BaseCarousel';

 
const BaseCarousel: React.FC<IBaseCarouselProps> & IBaseCarouselSubComponents = (props: IBaseCarouselProps = {
  columns: 1,
  spacing: 0,
  items: [],
  children: null
}) => {
  const classes = useStyles({
    pages: 3,
    page: 0,
    ...props
  });

  return (
    <div className={classes.container}>
      <div className={classes.rail}>
        {
          props?.items?.length ?
          props?.items?.map((item: React.FC | React.Component | Element) => item)
          : props.children
        }
      </div>
    </div>
  );
}

const Block: React.FC<{}> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}
Block.displayName = 'BaseCarousel.Block';

BaseCarousel.Block = Block;

export {
  BaseCarousel,
};