import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MenuCategoryTile from './MenuCategoryTile';
import BussinesMenu from '../Icon/BussinesMenu';
import EveryoneMenu from '../Icon/EveryoneMenu';

const MenuCategories = ({ isOpen }) => {
  return (
    <CategoriesWrapper isOpen={isOpen}>
      <MenuCategoryTile category="Dla każdego" icon={EveryoneMenu} />
      <MenuCategoryTile category="Dla Biznesu" icon={BussinesMenu} />
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: row;
`;

MenuCategories.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuCategories;
