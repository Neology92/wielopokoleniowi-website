import React, { useState } from 'react';

import MenuContainer from './MenuContainer';
import MenuCategories from './MenuCategories';
import MenuLinksWrapper from './MenuLinksWrapper';
import MenuLink from './MenuLink';
import { StyledButton, StyledLink } from './styled';

const Menu = () => {
  const [isCategoryBarOpen, setCategoryBarStatus] = useState(false);

  const changeCategoryBarStatus = () => {
    setCategoryBarStatus(!isCategoryBarOpen);
  };

  return (
    <MenuContainer>
      <nav>
        <MenuLinksWrapper isVisible={!isCategoryBarOpen}>
          <MenuLink>
            <StyledLink to="/o-autorze">O autorze</StyledLink>
          </MenuLink>

          <MenuLink>
            <StyledButton
              type="button"
              onClick={() => changeCategoryBarStatus()}
            >
              Artykuły
            </StyledButton>
          </MenuLink>

          <MenuLink>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </MenuLink>
        </MenuLinksWrapper>
        <MenuCategories isOpen={isCategoryBarOpen} />
      </nav>
    </MenuContainer>
  );
};

export default Menu;
