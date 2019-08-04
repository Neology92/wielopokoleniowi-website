import React from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import slugify from 'slugify';

import styled from 'styled-components';

const MenuCategoryTile = ({ category, icon }) => {
  const Icon = icon;

  return (
    <TileLink
      to={`/artykuly/${slugify(category.toLowerCase())}`}
      category={category}
    >
      <Icon />
      <CategoryName>{category.toUpperCase()}</CategoryName>
    </TileLink>
  );
};

const CategoryName = styled.div`
  margin: 20px;

  font-family: ${({ theme }) => theme.font.family.atma};
  font-size: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkBlue};
`;

const TileLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  height: 100%;
  background: rgb(${({ theme }) => theme.color.rgb.lightBlue}, 0.2);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: ${({ category }) =>
    category === 'Dla Biznesu' ? '0 0 10px 0' : '0 0 0 10px'};

  &:hover {
    background: ${({ theme, category }) =>
      category === 'Dla Biznesu'
        ? theme.color.nightBlue
        : theme.color.lightBlue};

    ${CategoryName} {
      color: white;
    }

    img {
      fill: white;
    }
  }
`;

MenuCategoryTile.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuCategoryTile;
