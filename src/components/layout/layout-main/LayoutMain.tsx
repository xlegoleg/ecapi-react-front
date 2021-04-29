import * as React from 'react';
import { RenderRoutes } from '@router/router';
import { mainRoutes } from '@router/routes/index';
import Container from '@material-ui/core/Container';
import { HeaderMain } from '@components/headers/header-main/HeaderMain';
import { FooterMain } from '@components/footers/footer-main/FooterMain';
import { MainThemeProvider } from '@styles/themes/main';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%'
  }
});

const LayoutMain: React.FC = () => {
  const classes = useStyles();

  return (
    <MainThemeProvider>
      <HeaderMain/>
        <main>
          <Container className={classes.container} maxWidth="lg">
            { RenderRoutes(mainRoutes) }
          </Container>
        </main>
      <FooterMain/>
    </MainThemeProvider>
  );
}

export default LayoutMain;