import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Hamburger from './Menu/Hamburger';
import HeaderWrapper from './HeaderWrapper';
import { StyledLogo, StyledMobileMenu } from './styled';
import Facebook from '../Icon/Facebook';
import Youtube from '../Icon/Youtube';

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    width: 110px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

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
        <StyledMobileMenu isOpen={isMenuOpen} />
        <SocialDesktop>
          <a
            href="https://www.facebook.com/KancelariaSukcesyjnaMARTYNIEC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
        </SocialDesktop>
      </InnerDiv>
    </HeaderWrapper>
  );
};

export default Header;
