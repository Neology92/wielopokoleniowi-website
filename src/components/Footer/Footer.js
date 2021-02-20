import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { StyledButton, StyledImg } from './styled';
import Block from './Block';
import FooterWrapper from './FooterWrapper';
import Bar from './Bar';
import {
  StyledFacebook,
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
        <h6>Kontakt</h6>
        <StyledTelephone />
        <a href="tel: +48604968609">+48 604 968 609</a>
        <StyledMail />
        <a href="mailto: wszyscyjestesmy@wielopokoleniowi.pl">
          wszyscyjestesmy@wielopokoleniowi.pl
        </a>
      </Block>
      <Block shadow="medium" isDark>
        <h6>
         Zapraszam również na:
        </h6>
        <StyledWeb />
        <a
          href="https://kancelariasukcesyjna.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.kancelariasukcesyjna.pl
        </a>
      </Block>
      <Block shadow="none">
        <StyledPages />
        <StyledButton to="/zasady-wielopokoleniowych" isTransparent>
          Zasady Wielopokoleniowych
        </StyledButton>

        <StyledImg fixed={data.file.childImageSharp.fixed} />
      </Block>
      <Bar>
        <section>
          <div>
            <a
              href="https://www.facebook.com/KancelariaSukcesyjnaMARTYNIEC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFacebook />
            </a>
            {/* Youtube will come back there in the future */}
            {/* <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledYoutube />
            </a> */}
          </div>
        </section>
        <section>
          <p>@ 2021 Wielopokoleniowi</p>
          <p>
            <Link to="/regulamin" rel="nofollow">
              REGULAMIN
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/polityka-prywatnosci" rel="nofollow">
              POLITYKA PRYWATNOŚCI
            </Link>
          </p>
        </section>
        <section>
          <p>
            PROJEKT: AVE STUDIO&nbsp;&nbsp;|&nbsp;&nbsp;WDROŻENIE: OSKAR LEGNER
          </p>
        </section>
      </Bar>
    </FooterWrapper>
  );
};

export default Footer;
