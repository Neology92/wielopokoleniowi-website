import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import styled from 'styled-components';

import PostTile from '../PostTile/PostTile';
import PostsGridWrapper from './PostsGridWrapper';

const PostsGrid = ({ posts }) => {
  return (
    <PostsGridWrapper>
      {posts.map(({ node }) => (
        <StyledLink key={node.id} to={`/${slugify(node.title.toLowerCase())}`}>
          <PostTile post={node} />
        </StyledLink>
      ))}
    </PostsGridWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default PostsGrid;
