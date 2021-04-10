import * as React from 'react';
import { RenderRoutes } from '@router/router';
import { mainRoutes } from '@router/routes/index';

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