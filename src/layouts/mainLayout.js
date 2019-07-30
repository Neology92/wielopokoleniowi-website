import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsAtma.css';
import 'assets/styles/fontsRoboto.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header, Footer, Menu } from 'components';
import Background from './Background';

const MainLayout = ({ children, isMainPage }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Background>
          <Menu />
          <StyledMain isMainPage={isMainPage}>{children}</StyledMain>
        </Background>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

const StyledMain = styled.main`
  ${({ isMainPage }) =>
    isMainPage
      ? `width: 100%;`
      : `
  margin: 60px auto 10vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${theme.media.above.s} {
    margin: 60px 8vw;
    width: 84vw;
  }

  ${theme.media.above.m} {
    margin: 60px 15vw;
    width: 70vw;
  }

  ${theme.media.above.l} {
    margin: 60px auto 10vw;
    width: 89%;
    flex-direction: row;
    align-items: stretch;
  }

  ${theme.media.above.xl} {
    flex-direction: row;
    width: 1070px;

    align-items: stretch;
  }`};
`;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isMainPage: PropTypes.bool,
};

MainLayout.defaultProps = {
  isMainPage: false,
};

export default MainLayout;
