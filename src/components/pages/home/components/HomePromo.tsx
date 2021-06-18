import React from 'react';
import { BaseCarousel } from '@components/base/carousel/BaseCarousel';
import { Typography } from '@material-ui/core';
import { useStyles } from '@styles/pages/home/HomePromoStyle';

export const HomePromo: React.FC = (props) => {
  const classes = useStyles();

  const promo = [
    {
      picture: '/content/promo/promo_1.jpg',
      background: 'red'
    },
    {
      picture: '/content/promo/promo_2.jpg',
      background: 'blue'
    },
    {
      picture: '/content/promo/promo_3.jpg',
      background: 'green'
    }
  ]

  return (
    <div className={classes.container}>
      <BaseCarousel
        auto={true} 
        columns={1} 
        showNav={true}
      >
        {
          promo.map((item, index) => {
            return<BaseCarousel.Block key={`carousel-block-${index}`}>
                    <div 
                      style={{width: '100%',
                             height: '450px', 
                             background: `url('${item.picture}') center center/cover no-repeat`}}
                    />
                  </BaseCarousel.Block>
          })
        }
      </BaseCarousel>
      <Typography className={classes.title} variant="h1">
        {'Probably calm down and have a beer'}
      </Typography>
    </div>
  );
}