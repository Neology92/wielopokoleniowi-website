import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsAtma.css';
import 'assets/styles/fontsRoboto.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header, Footer, Menu } from 'components';
import Background from './Background';

const MainLayout = ({ children, isMainPage, isPost }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Background>
          <Menu />
          <StyledMain isMainPage={isMainPage} isPost={isPost}>
            {children}
          </StyledMain>
        </Background>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

const StyledMain = styled.main`
  ${({ isMainPage, isPost }) =>
    isMainPage
      ? `width: 100%;`
      : `
  margin: 60px auto 0;
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
    margin: 60px auto;
    width: 89%;
    align-items: stretch;
    ${isPost ? `flex-direction: row;` : ``}
  }
  
  ${theme.media.above.xl} {
    width: 1070px;

    align-items: stretch;
  }`};
`;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isMainPage: PropTypes.bool,
  isPost: PropTypes.bool,
};

MainLayout.defaultProps = {
  isMainPage: false,
  isPost: false,
};

export default MainLayout;
