import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '@components/pages/home/Home';
import { RenderRoutes, mainRoutes } from '@router/router';

const LayoutMain: React.FC = () => {
  {
    return (
      <main>
        { RenderRoutes(mainRoutes) }
      </main>
    )
  }
}

export default LayoutMain;