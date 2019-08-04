import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// import slugify from 'slugify';

import MenuCategories from './MenuCategories';

// const menuItems = ['O autorze', 'Artykuły', 'Kontakt'];

const Menu = () => {
  const [isCategoryBarOpen, setCategoryBarStatus] = useState(false);

  const changeCategoryBarStatus = () => {
    setCategoryBarStatus(!isCategoryBarOpen);
  };

  return (
    <MenuContiner>
      <nav>
        <MenuLinksWrapper>
          <MenuLink>
            <StyledLink to="/o-autorze">O autorze</StyledLink>
          </MenuLink>

          <MenuLink>
            <button type="button" onClick={() => changeCategoryBarStatus()}>
              Artykuły
            </button>
          </MenuLink>

          <MenuLink>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </MenuLink>
        </MenuLinksWrapper>
        <MenuCategories isOpen={isCategoryBarOpen} />
      </nav>
    </MenuContiner>
  );
};

// {menuItems.map(item => (
//   <MenuLink key={item}>
//     <StyledLink to={`/${slugify(item.toLowerCase())}`}>
//       {item}
//     </StyledLink>
//   </MenuLink>
// ))}

const MenuLinksWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const MenuLink = styled.li`
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.nightBlue};
  font-size: 2.4rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MenuContiner = styled.div`
  position: relative;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    position: relative;
    width: 656px;
    border-bottom: 2px solid
      rgba(${({ theme }) => theme.color.rgb.darkBlue}, 0.1);

    font-family: ${({ theme }) => theme.font.family.atma};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: calc (50% - 8px);
    width: 0;
    height: 0;
    border-style: solid;
    border-top: 11px solid rgba(${({ theme }) => theme.color.rgb.darkBlue}, 0.1);
    border-right: 8px solid transparent;
    border-bottom: 0;
    border-left: 8px solid transparent;
  }
`;

export default Menu;
