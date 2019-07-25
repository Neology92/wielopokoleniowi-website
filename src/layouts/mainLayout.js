import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsAtma.css';
import 'assets/styles/fontsRoboto.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header, Footer, Menu } from 'components';
import Background from './Background';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Background>
          <Menu />
          <main>{children}</main>
        </Background>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
