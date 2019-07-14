import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { StyledButton, StyledImg } from './styled';
import Block from './Block';
import FooterWrapper from './FooterWrapper';
import Bar from './Bar';
import {
  StyledFacebook,
  StyledYoutube,
  StyledTelephone,
  StyledMail,
  StyledWeb,
  StyledPages,
} from './Icons';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterImage {
      file(relativePath: { eq: "family.png" }) {
        childImageSharp {
          fixed(width: 194, height: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
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
        <a href="https://kancelariasukcesyjna.pl/">
          www.kancelariasukcesyjna.pl
        </a>
      </Block>
      <Block shadow="none">
        <StyledPages />
        <StyledButton isTransparent>Zasady Wielopokoleniowych</StyledButton>
        <StyledImg fixed={data.file.childImageSharp.fixed} />
      </Block>
      <Bar>
        <div>
          <a href="https://www.facebook.com/KancelariaSukcesyjnaMARTYNIEC/">
            <StyledFacebook />
          </a>
          <a href="https://www.youtube.com/">
            <StyledYoutube />
          </a>
        </div>
        <p>@ 2019 Wielopokoleniowi</p>
        <p>
          <Link to="/">REGULAMIN</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/">POLITYKA PRYWATNOŚCI</Link>
        </p>
        <p>
          PROJEKT: AVE STUDIO&nbsp;&nbsp;|&nbsp;&nbsp;WDROŻENIE: OSKAR LEGNER
        </p>
      </Bar>
    </FooterWrapper>
  );
};

export default Footer;
