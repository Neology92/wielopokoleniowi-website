import React from 'react';
import PropTypes from 'prop-types';

import PostTile from '../PostTile/PostTile';
import RecommendedWrapper from './RecommendedWrapper';
import PostsWrapper from './PostsWrapper';
import TileWrapper from './TileWrapper';
import { SidebarSectionHeading } from '../Headings/Headings';

const Recommended = ({ recommendedPostsEdges }) => {
  return (
    <RecommendedWrapper>
      <SidebarSectionHeading>Polecam również:</SidebarSectionHeading>
      <PostsWrapper>
        {recommendedPostsEdges.map(edge => (
          <div key={edge.node.id}>
            <TileWrapper>
              <PostTile post={edge.node} />
            </TileWrapper>
          </div>
        ))}
      </PostsWrapper>
    </RecommendedWrapper>
  );
};

Recommended.propTypes = {
  recommendedPostsEdges: PropTypes.arrayOf(PropTypes.node),
};

Recommended.defaultProps = {
  recommendedPostsEdges: [],
};

export default Recommended;
