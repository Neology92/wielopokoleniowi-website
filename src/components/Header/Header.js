import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';
import Hamburger from './Menu/Hamburger';
import Logo from './Logo';
import MobileMenu from './Menu/MobileMenu';

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <InnerDiv />
      <InnerDiv>
        <Link to="/">
          <StyledLogo />
        </Link>
      </InnerDiv>
      <InnerDiv>
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        <SyledMobileMenu isOpen={isMenuOpen} />
      </InnerDiv>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 84px;
  background-image: url(${bgImage});
  background-size: cover;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;

  position: fixed;
  top: 0;
  left: 0;
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
  right: 0;
  height: calc(100vh - 83px);
`;

export default Header;
