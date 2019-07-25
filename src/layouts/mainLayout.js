import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsAtma.css';
import 'assets/styles/fontsRoboto.css';

import { lazyLoad } from 'assets/styles/keyframes';

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
          <StyledMain>{children}</StyledMain>
        </Background>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledMain = styled.main`
  animation: ${lazyLoad} 0.5s ease-in-out;
`;

export default MainLayout;
