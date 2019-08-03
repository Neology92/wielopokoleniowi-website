import React from 'react';
import PropTypes from 'prop-types';

import slugify from 'slugify';

import MenuLink from './MenuLink';
import MenuWrapper from './MenuWrapper';
import IconsWrapper from './IconsWrapper';
import MenuLinksWrapper from './MenuLinksWrapper';
import { StyledLink, StyledFacebook, StyledYoutube } from './styled';

const menuItems = ['O autorze', 'Artykuły', 'Kontakt', 'Newsletter'];

const MobileMenu = ({ className, isOpen }) => (
  <MenuWrapper className={className} isOpen={isOpen}>
    <MenuLinksWrapper>
      {menuItems.map(item => (
        <MenuLink isOpen={isOpen} key={item}>
          <StyledLink to={`/${slugify(item.toLowerCase())}`}>{item}</StyledLink>
        </MenuLink>
      ))}
    </MenuLinksWrapper>
    <IconsWrapper isOpen={isOpen}>
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
