import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';
import InnerWrapperLeft from './InnerWrapperLeft';
import InnerWrapperRight from './InnerWrapperRight';

const PostsSortingHeader = ({ path, ...props }) => {
  return (
    <TileWrapper category={path}>
      <InnerWrapperLeft path={path} />
      <InnerWrapperRight {...props} />
    </TileWrapper>
  );
};

PostsSortingHeader.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PostsSortingHeader;
