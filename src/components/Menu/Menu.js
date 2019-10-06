import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useOnClick } from 'utils';

import MenuContainer from './MenuContainer';
import MenuCategories from './MenuCategories';
import MenuLinksWrapper from './MenuLinksWrapper';
import MenuLink from './MenuLink';
import { StyledButton, StyledLink } from './styled';

const Menu = ({ path }) => {
  const [isCategoryBarOpen, setCategoryBarOpen] = useState(false);

  useOnClick(() => setCategoryBarOpen(false));

  return (
    <MenuContainer isCategoryBarOpen={isCategoryBarOpen}>
      <nav>
        <MenuLinksWrapper isVisible={!isCategoryBarOpen} path={path}>
          <MenuLink>
            <StyledLink to="/o-autorze">
              <div>O autorze</div>
            </StyledLink>
          </MenuLink>

          <MenuLink>
            <StyledButton
              type="button"
              onClick={() => setCategoryBarOpen(!isCategoryBarOpen)}
            >
              <div>Artykuły</div>
            </StyledButton>
          </MenuLink>

          <MenuLink>
            <StyledLink to="/slownik">
              <div>Słownik</div>
            </StyledLink>
          </MenuLink>
        </MenuLinksWrapper>
      </nav>
      <MenuCategories isOpen={isCategoryBarOpen} />
    </MenuContainer>
  );
};

Menu.propTypes = {
  path: PropTypes.string,
};

Menu.defaultProps = {
  path: '',
};

export default Menu;
