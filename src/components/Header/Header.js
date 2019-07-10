import React from 'react';
import { Link } from 'gatsby';
import { HeaderWrap, CenterC, Logo } from './styled';
import { BurgerButton } from './BurgerButton';

const Header = () => (
  <HeaderWrap>
    <div />
    <CenterC>
      <Link to="/">
        <Logo width="141" />
      </Link>
    </CenterC>
    <CenterC>
      <BurgerButton />
    </CenterC>
  </HeaderWrap>
);

export default Header;
