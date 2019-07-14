import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Img from 'gatsby-image';
import {
  FooterWrap,
  Block,
  Bar,
  StyledFacebook,
  StyledYoutube,
  StyledTelephone,
  StyledMail,
  StyledWeb,
  StyledButton,
} from './styled';

// TODO: Make better way to fit image...
const StyledImg = styled(Img)`
  margin: 25px 0 0;
  picture {
    margin: 0 12px;
  }
  picture img {
    width: 170px !important;
    height: 79px !important;
  }

  ${({ theme }) => theme.media.above.m} {
    margin: 35px 0 0;
    picture {
      margin: 0 0;
    }
    picture img {
      width: 194px !important;
      height: 90px !important;
    }
  }
`;

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
        <a href="https://kancelariasukcesyjna.pl/">
          www.kancelariasukcesyjna.pl
        </a>
      </Block>
      <Block shadow="none">
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
    </FooterWrap>
  );
};

export default Footer;
