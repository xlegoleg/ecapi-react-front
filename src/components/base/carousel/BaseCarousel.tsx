import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { useStyles } from './BaseCarouselStyle';
import { IBaseCarouselProps, IBaseCarouselSubComponents } from '@interfaces/components/BaseCarousel';

 
const BaseCarousel: React.FC<IBaseCarouselProps> & IBaseCarouselSubComponents = (props: IBaseCarouselProps) => {
  const [autoInterval, setAutoInterval] = useState<NodeJS.Timer | null>(null);
  
  // TODO translate = 0*page - spacing*px
  const interval = 3000;
  const pages = React.Children.count(props.children) || props.items?.length || 0;
  const [page, setPage] = useState(0)
  const classes = useStyles({
    pages: pages,
    page: page,
    ...props
  });

  useEffect(() => {
    initAutoScroll();

    return () => {
      if (autoInterval) {
        clearInterval(autoInterval)
      }
    }
  }, [page]);

  const changePage = (page: number): void => {
    setPage(page > pages-1 ? 0 : page < 0 ? pages-1 : page)
  }

  const initAutoScroll = (): void => {
    if (props.auto) {
      const initialInterval = setInterval(() => {
        changePage(page+1);
      }, interval);
      setAutoInterval(initialInterval);
    }
  }

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

BaseCarousel.defaultProps = {
  columns: 1,
  spacing: 0,
  items: [],
  children: null,
  auto: false
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