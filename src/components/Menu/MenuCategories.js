import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import everyoneMenu from 'assets/images/everyoneMenu.svg';
import bussinesMenu from 'assets/images/bussinesMenu.svg';
import MenuCategoryTile from './MenuCategoryTile';

const MenuCategories = ({ isOpen }) => {
  return (
    <CategoriesWrapper isOpen={isOpen}>
      <MenuCategoryTile category="Dla każdego" iconSrc={everyoneMenu} />
      <MenuCategoryTile category="Dla Biznesu" iconSrc={bussinesMenu} />
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: row;
`;

MenuCategories.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuCategories;
