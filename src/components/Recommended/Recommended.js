import React from 'react';
import PropTypes from 'prop-types';

import PostTile from '../PostTile/PostTile';
import RecommendedWrapper from './RecommendedWrapper';
import PostsWrapper from './PostsWrapper';
import { SidebarSectionHeading } from '../Headings/Headings';

const Recommended = ({ recommendedPostsEdges }) => {
  return (
    <RecommendedWrapper>
      <SidebarSectionHeading>Polecam również:</SidebarSectionHeading>
      <PostsWrapper>
        {recommendedPostsEdges.map(edge => (
          <div key={edge.node.id}>
            <PostTile post={edge.node} />
            {/* {edge.node.tags.map(tag => (
            <h6 key={tag.value}>{tag.value}</h6>
          ))} */}
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
