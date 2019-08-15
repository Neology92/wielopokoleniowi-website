import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from './MenuLink';
import MenuWrapper from './MenuWrapper';
import IconsWrapper from './IconsWrapper';
import MenuLinksWrapper from './MenuLinksWrapper';
import { StyledLink, StyledFacebook, StyledYoutube } from './styled';

const menuItems = [
  { name: 'O autorze', slug: '/o-autorze' },
  { name: '', slug: '' },
  { name: 'Dla Każdego', slug: '/artykuly/dla-kazdego' },
  { name: 'Dla Biznesu', slug: '/artykuly/dla-biznesu' },
  { name: '', slug: '' },
  { name: 'Kontakt', slug: '/kontakt' },
  { name: 'Newsletter', slug: '/newsletter' },
];

const MobileMenu = ({ className, isOpen }) => (
  <MenuWrapper className={className} isOpen={isOpen}>
    <MenuLinksWrapper>
      {menuItems.map(item => (
        <MenuLink isOpen={isOpen} key={item.name}>
          <StyledLink to={item.slug}>{item.name}</StyledLink>
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
