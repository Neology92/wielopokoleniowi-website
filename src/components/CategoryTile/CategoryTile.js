import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Category = ({ className }) => {
  return (
    <div className={className}>
      <h1> icon </h1>
    </div>
  );
};

const CategoryTile = styled(Category)`
  height: 100%;
  width: 50%;
  background: ${({ theme: { color }, isDark }) =>
    isDark ? color.nightBlue : color.lightBlue};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

Category.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CategoryTile;
