import React from 'react';
import { Link } from 'gatsby';

import {
  FooterWrap,
  Block,
  Bar,
  StyledFacebook,
  StyledYoutube,
} from './styled';

const Footer = () => (
  <FooterWrap>
    <Block shadow="strong" />
    <Block shadow="medium" isDark />
    <Block shadow="none" />
    <Bar>
      <div>
        <StyledFacebook />
        <StyledYoutube />
      </div>
      <p>@ 2019 Wielopokoleniowi</p>
      <p>
        <Link to="/">REGULAMIN</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/">POLITYKA PRYWATNOŚCI</Link>
      </p>
      <p>PROJEKT: AVE STUDIO&nbsp;&nbsp;|&nbsp;&nbsp;WDROŻENIE: NEOLOGY</p>
    </Bar>
  </FooterWrap>
);

export default Footer;
