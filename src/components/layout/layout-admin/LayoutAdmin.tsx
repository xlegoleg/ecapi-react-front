import * as React from 'react';
import { RenderRoutes } from '@router/router';
import { adminRoutes } from '@router/routes/index';

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