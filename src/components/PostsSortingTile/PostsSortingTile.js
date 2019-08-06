import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';

const PostsSortingTile = ({ path }) => {
  return (
    <TileWrapper category={path}>
      <div />
    </TileWrapper>
  );
};

PostsSortingTile.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PostsSortingTile;
