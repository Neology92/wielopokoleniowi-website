import React from 'react';
import { HeaderWrap, CenterC, Logo } from './styled';
import { BurgerButton } from './BurgerButton';

const Header = () => (
  <HeaderWrap>
    <div />
    <CenterC>
      <Logo width="141" />
    </CenterC>
    <CenterC>
      <BurgerButton />
    </CenterC>
  </HeaderWrap>
);

export default Header;
