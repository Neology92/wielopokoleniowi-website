import React from 'react';
import { Link } from 'gatsby';
import { FooterWrap, Block, Bar } from './styled';

const Footer = () => (
  <FooterWrap>
    <Block />
    <Block color="dark" />
    <Block />
    <Bar>
      <div>
        <div>a</div>
        <div>b</div>
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
