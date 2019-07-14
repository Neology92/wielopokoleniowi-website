import React from 'react';
import { Link } from 'gatsby';

import {
  FooterWrap,
  Block,
  Bar,
  StyledFacebook,
  StyledYoutube,
  StyledTelephone,
  StyledMail,
  StyledWeb,
} from './styled';

const Footer = () => (
  <FooterWrap>
    <Block shadow="strong">
      <h1>Masz jakieś pytania?</h1>
      <StyledTelephone />
      <a href="tel: +48604968609">+48 604 968 609</a>
      <StyledMail />
      <a href="mailto: martyniec@kancelariasukcesyjna.pl">
        martyniec@kancelariasukcesyjna.pl
      </a>
    </Block>
    <Block shadow="medium" isDark>
      <h1>
        Masz problem?
        <br />
        Szukasz pomocy sukcesyjnej?
      </h1>
      <StyledWeb />
      <a href="https://kancelariasukcesyjna.pl/">www.kancelariasukcesyjna.pl</a>
    </Block>
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
