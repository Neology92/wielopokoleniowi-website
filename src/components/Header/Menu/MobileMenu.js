import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Facebook from '../../Icon/Facebook';
import Youtube from '../../Icon/Youtube';

const MenuWrapper = styled.nav`
  height: 610px;
  width: 127px;
  position: absolute;
  z-index: 998;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.darkBlue};

  transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};

  ${({ theme }) => theme.media.above.s} {
    width: 127px;
  }

  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

const MenuLinksWrapper = styled.ul`
  margin: 112px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MenuLink = styled.li`
  margin-bottom: 31px;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  line-height: 39px;
  font-weight: 400;
`;

const StyledFacebook = styled(Facebook)`
  height: 33px;
  padding: 15px;
`;

const StyledYoutube = styled(Youtube)`
  height: 28px;
  padding: 15px;
`;

const IconsWrapper = styled.div`
  height: 115px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const menuItems = ['O autorze', 'Artykuły', 'Kontakt'];

const MobileMenu = ({ className, isOpen }) => (
  <MenuWrapper className={className} isOpen={isOpen}>
    <MenuLinksWrapper>
      {menuItems.map(item => (
        <MenuLink key={item}>{item}</MenuLink>
      ))}
    </MenuLinksWrapper>
    <IconsWrapper>
      <a href="https://www.facebook.com/KancelariaSukcesyjnaMARTYNIEC/">
        <StyledFacebook />
      </a>
      <a href="https://www.youtube.com/">
        <StyledYoutube />
      </a>
    </IconsWrapper>
  </MenuWrapper>
);

MobileMenu.propTypes = {
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
