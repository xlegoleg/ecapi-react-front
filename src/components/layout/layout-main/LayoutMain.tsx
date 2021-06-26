import * as React from 'react';
import { RenderRoutes } from '@router/router';
import { mainRoutes } from '@router/routes/index';
import { HeaderMain } from '@components/headers/header-main/HeaderMain';
import { FooterMain } from '@components/footers/footer-main/FooterMain';
import { MainThemeProvider } from '@styles/themes/main';

const LayoutMain: React.FC = () => {

  return (
    <MainThemeProvider>
      <HeaderMain/>
        <main>
          { RenderRoutes(mainRoutes) }
        </main>
      <FooterMain/>
    </MainThemeProvider>
  );
}

export default LayoutMain;