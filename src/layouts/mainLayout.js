import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Header from 'components/Header/Header';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
