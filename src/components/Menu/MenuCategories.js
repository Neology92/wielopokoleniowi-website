import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MenuCategoryTile from './MenuCategoryTile';

const MenuCategories = ({ isOpen }) => {
  return (
    <CategoriesWrapper isOpen={isOpen}>
      <MenuCategoryTile category="Dla każdego" />
      <MenuCategoryTile category="Dla Biznesu" />
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 100%;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  flex-direction: row;
`;

MenuCategories.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuCategories;
