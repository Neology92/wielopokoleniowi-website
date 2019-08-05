import React, { useState, useRef } from 'react';

import { useClickOutside } from 'utils';

import MenuContainer from './MenuContainer';
import MenuCategories from './MenuCategories';
import MenuLinksWrapper from './MenuLinksWrapper';
import MenuLink from './MenuLink';
import { StyledButton, StyledLink } from './styled';

const Menu = () => {
  const ref = useRef();
  const [isCategoryBarOpen, setCategoryBarOpen] = useState(false);

  useClickOutside(ref, () => setCategoryBarOpen(false));

  return (
    <MenuContainer isCategoryBarOpen={isCategoryBarOpen}>
      <nav>
        <MenuLinksWrapper isVisible={!isCategoryBarOpen}>
          <MenuLink>
            <StyledLink to="/o-autorze">O autorze</StyledLink>
          </MenuLink>

          <MenuLink>
            <StyledButton
              type="button"
              onClick={() => setCategoryBarOpen(!isCategoryBarOpen)}
            >
              Artykuły
            </StyledButton>
          </MenuLink>

          <MenuLink>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </MenuLink>
        </MenuLinksWrapper>
      </nav>
      <div ref={ref}>
        <MenuCategories isOpen={isCategoryBarOpen} />
      </div>
    </MenuContainer>
  );
};

export default Menu;
