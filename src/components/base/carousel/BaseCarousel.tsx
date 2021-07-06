import React, { useState, useEffect } from 'react';
import { BaseCarouselNav } from './BaseCarouselNav';
import { IconButton } from '@material-ui/core';
import { useStyles } from './styles/BaseCarouselStyle';
import { IBaseCarouselProps, IBaseCarouselSubComponents } from '@/interfaces/components/carousel/BaseCarousel';

 
const BaseCarousel: React.FC<IBaseCarouselProps> & IBaseCarouselSubComponents = (props: IBaseCarouselProps) => {
  const [autoInterval, setAutoInterval] = useState<NodeJS.Timer | null>(null);
  const [page, setPage] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const columns = props?.columns || 1;
  const interval = 3000;
  const pages = Math.ceil((React.Children.count(props.children))/columns) || 0;
  const groupedChildren = React.Children.toArray(props.children)?.reduce((acc: React.ReactNode[][] , child, index) => {
    if (!index || (index && !(index % columns))) {
      acc.push([child]);
    } else {
      Array.isArray(acc[acc.length - 1]) ? acc[acc.length - 1].push(child) : acc.push([child]);
    }
    return acc;
  }, [])

  const classes = useStyles({
    pages,
    page,
    columns,
    isTransition,
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

  const changePage = (newPage: number): void => {
    const selectedPage = newPage > pages-1 ? 0 : newPage < 0 ? pages-1 : newPage;
    if ((selectedPage === 0 && page === pages-1) || (selectedPage === pages - 1 && !page )) {
      setIsTransition(false)
    } else {
      setIsTransition(true);
    }
    setPage(newPage > pages-1 ? 0 : newPage < 0 ? pages-1 : newPage)
  }

  const initAutoScroll = (): void => {
    if (props.auto) {
      const initialInterval = setInterval(() => {
        changePage(page+1);
      }, interval);
      setAutoInterval(initialInterval);
    }
  }

  const updateHandler = (page: number) => {
    changePage(page);
  }

  return (
    <div className={classes.container}>
      <div className={classes.rail}>
        {
          groupedChildren.map((child, boxIndex) => {
            return (
              <div key={`carousel-box-${boxIndex}`} className={classes.box}>
                {
                  child.map((item, itemIndex) => {
                    return (
                      <div key={`carousel-item-${itemIndex}`} className={classes.item}>{item}</div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      {props?.showNav ? <BaseCarouselNav updatePage={updateHandler} page={page} pages={pages}/> : null}
    </div>
  );
}

BaseCarousel.defaultProps = {
  columns: 1,
  spacing: 0,
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