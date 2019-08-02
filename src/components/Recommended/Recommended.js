import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
              <StyledLink to={`/${slugify(edge.node.title.toLowerCase())}`}>
                <PostTile post={edge.node} />
              </StyledLink>
            </TileWrapper>
          </div>
        ))}
      </PostsWrapper>
    </RecommendedWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

Recommended.propTypes = {
  recommendedPostsEdges: PropTypes.arrayOf(PropTypes.node),
};

Recommended.defaultProps = {
  recommendedPostsEdges: [],
};

export default Recommended;
