import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';
import Hamburger from './Menu/Hamburger';
import Logo from './Logo';
import MobileMenu from './Menu/MobileMenu';

const HeaderWrapper = styled.header`
  padding: 0 -5px;
  width: 100%;
  height: 84px;
  background-image: url(${bgImage});
  background-size: cover;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;

  position: fixed;
  top: 0;
  left: -2px;
  z-index: 100;

  ${({ theme }) => theme.media.above.m} {
    height: 160px;
    position: static;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  width: 141px;

  ${({ theme }) => theme.media.above.m} {
    width: 252px;
  }
`;

const SyledMobileMenu = styled(MobileMenu)`
  top: 83px;
  height: calc(100vh - 84px);
`;

const Header = () => (
  <HeaderWrapper>
    <InnerDiv />
    <InnerDiv>
      <Link to="/">
        <StyledLogo />
      </Link>
    </InnerDiv>
    <InnerDiv>
      <Hamburger />
      <SyledMobileMenu />
    </InnerDiv>
  </HeaderWrapper>
);

export default Header;
