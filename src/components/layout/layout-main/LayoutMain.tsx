import * as React from 'react';
import { RenderRoutes } from '@router/router';
import { mainRoutes } from '@router/routes/index';
import Container from '@material-ui/core/Container';
import { HeaderMain } from '@components/headers/header-main/HeaderMain';
import { FooterMain } from '@components/footers/footer-main/FooterMain';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '@styles/themes/main'

const LayoutMain: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <HeaderMain/>
        <main>
          <Container maxWidth="lg">
            { RenderRoutes(mainRoutes) }
          </Container>
        </main>
        <FooterMain/>
      </div>
    </ThemeProvider>
  );
}

export default LayoutMain;