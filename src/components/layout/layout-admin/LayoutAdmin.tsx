import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '@components/pages/home/Home';
import { RenderRoutes, adminRoutes } from '@router/router';

const LayoutAdmin: React.FC = () => {
  {
    return (
      <main>
        { RenderRoutes(adminRoutes) }
      </main>
    )
  }
}

export default LayoutAdmin;