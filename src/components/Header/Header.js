import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Hamburger from './Menu/Hamburger';
import HeaderWrapper from './HeaderWrapper';
import { StyledLogo, StyledMobileMenu } from './styled';

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      </InnerDiv>
    </HeaderWrapper>
  );
};

export default Header;
