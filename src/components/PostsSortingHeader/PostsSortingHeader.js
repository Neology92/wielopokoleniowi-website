import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';
import InnerWrapperLeft from './InnerWrapperLeft';
import InnerWrapperRight from './InnerWrapperRight';

const PostsSortingHeader = ({
  path,
  setSearchValue,
  setFilterTags,
  filterTags,
}) => {
  return (
    <TileWrapper category={path}>
      <InnerWrapperLeft path={path} />
      <InnerWrapperRight
        setSearchValue={setSearchValue}
        setFilterTags={setFilterTags}
        filterTags={filterTags}
      />
    </TileWrapper>
  );
};

PostsSortingHeader.propTypes = {
  path: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setFilterTags: PropTypes.func.isRequired,
  filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostsSortingHeader;
