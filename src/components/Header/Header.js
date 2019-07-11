import React from 'react';
import { Link } from 'gatsby';
import { HeaderWrap, CenterC, StyledLogo } from './styled';
import { BurgerButton } from './BurgerButton';

const Header = () => (
  <HeaderWrap>
    <div />
    <CenterC>
      <Link to="/">
        <StyledLogo />
      </Link>
    </CenterC>
    <CenterC>
      <BurgerButton />
    </CenterC>
  </HeaderWrap>
);

export default Header;
