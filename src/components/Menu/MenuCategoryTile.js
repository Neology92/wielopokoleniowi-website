import React from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import slugify from 'slugify';

import styled from 'styled-components';

const MenuCategoryTile = ({ category }) => (
  <TileLink to={`/${slugify(category.toLowerCase())}`}>
    {category.toUpperCase()}
  </TileLink>
);

const TileLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 50%;
  height: 100%;
  background: rgb(${({ theme }) => theme.color.rgb.lightBlue}, 1);
`;

MenuCategoryTile.propTypes = {
  category: PropTypes.string.isRequired,
};

export default MenuCategoryTile;
