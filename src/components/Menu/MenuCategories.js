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
  top: 0;
  left: calc(50% - 328px);
  z-index: 1;
  width: 656px;
  height: 71px;
  display: flex;
  flex-direction: row;
  /* visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')}; */

  transform: translate(0, ${({ isOpen }) => (isOpen ? '0' : '-100%')});
  /* opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; */
  transition: transform 0.4s ease-in-out;
  /* transition: opacity 0.1s ease-in-out; */
`;

MenuCategories.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuCategories;
