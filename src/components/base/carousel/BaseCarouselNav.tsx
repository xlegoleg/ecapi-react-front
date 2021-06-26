import React, { useState, useEffect } from 'react';
import { useStyles } from './styles/BaseCarouselNavStyles';
import { IBaseCarouselNav  } from '@/interfaces/components/carousel/BaseCarouselNav';

export const BaseCarouselNav: React.FC<IBaseCarouselNav> = (props: IBaseCarouselNav) => {
  const classes = useStyles();
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    initButtons();
  },[])

  const updatePage = (page: number) => {
    props.updatePage(page);
  }
  
  const initButtons = () => {
    const itemNumbers = [];
    for (let i = 0; i < props?.pages; i++) {
      itemNumbers.push(i);
    }
    setItems(itemNumbers);
  }

  return (
    <div className={classes.container}>
      {
        items.map((item, index) => {
          return <div 
                    key={`carousel-nav-${index}`} 
                    className={`${classes.item} ${index === props.page ? classes.item_active : ''}`}
                    onClick={updatePage.bind(null, index)}
                  >
                  </div>
        })
      }
    </div>
  )
}