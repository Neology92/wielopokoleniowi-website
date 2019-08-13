import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';
import InnerWrapperLeft from './InnerWrapperLeft';
import InnerWrapperRight from './InnerWrapperRight';

const PostsSortingHeader = ({ path, setSearchState }) => {
  return (
    <TileWrapper category={path}>
      <InnerWrapperLeft path={path} />
      <InnerWrapperRight setSearchState={setSearchState} />
    </TileWrapper>
  );
};

PostsSortingHeader.propTypes = {
  path: PropTypes.string.isRequired,
  setSearchState: PropTypes.func.isRequired,
};

export default PostsSortingHeader;
