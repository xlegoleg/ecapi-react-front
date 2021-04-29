import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ITabRoute } from '@interfaces/base/tabRouter';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    tab: {
      minWidth: '70px'
    }
  });
});

export const HeaderMainNav: React.FC = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [path, setPath] = useState(window.location.pathname);
  const paths: ITabRoute[] = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Products',
      path: '/products'
    },
    {
      label: 'News',
      path: '/news'
    },
    {
      label: 'About us',
      path: '/about_us'
    }
  ]

  const handlePathChange = (event: ChangeEvent<{}>, path: string) => {
    setPath(path);
    history.push(path);
  }

  return <Tabs
    onChange={handlePathChange}
    value={path}
    indicatorColor="secondary"
  >
    {
      paths.map((path: ITabRoute, index: number) => {
        return <Tab
        key={`${path.path}-${index}-${path.label}`} 
        className={classes.tab} 
        value={path.path} 
        label={path.label} 
        />
      })
    }
  </Tabs>
}