import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Hamburger from '../Hamburger/Hamburger';
import HeaderWrapper from './HeaderWrapper';
import { StyledLogo, StyledMobileMenu } from './styled';
import Facebook from '../Icon/Facebook';
// import Youtube from '../Icon/Youtube';

const InnerDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    width: 223px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
//
// const StyledNewsletterButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-family: ${({ theme }) => theme.font.family.atma};
//   font-size: 20px;
//   font-weight: 500;
//   margin: 0 15px 0 0;
//   padding: 0;
//
//   ${({ theme }) => theme.media.above.l} {
//     margin: 0 10px 0 0;
//   }
//
//   ${({ theme }) => theme.media.above.xl} {
//     margin: 0 0 0 0;
//   }
// `;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <InnerDiv />
      <InnerDiv>
        <h1>
          <Link to="/">
            <StyledLogo />
          </Link>
        </h1>
      </InnerDiv>
      <InnerDiv>
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        <StyledMobileMenu isOpen={isMenuOpen} />
        <SocialDesktop>
          <a
            href="https://www.facebook.com/KancelariaSukcesyjnaMARTYNIEC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          {/* Youtube will come back there in the future */}
          {/* <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a> */}

          {/* Newsletter will come back there in the future */}
          {/* <StyledNewsletterButton>Newsletter</StyledNewsletterButton> */}
        </SocialDesktop>
      </InnerDiv>
    </HeaderWrapper>
  );
};

export default Header;
