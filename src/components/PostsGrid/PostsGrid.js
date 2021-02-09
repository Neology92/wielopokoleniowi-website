import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import styled from 'styled-components';

import propTypeCommons from '../../utils/propTypeCommons';

import PostTile from '../PostTile/PostTile';
import PostsGridWrapper from './PostsGridWrapper';

const PostsGrid = ({ posts }) => {
  return (
    <PostsGridWrapper>
      {posts.map(post => (
        <StyledLink key={post.id} to={`/${slugify(post.title.toLowerCase())}`}>
          <PostTile post={post} />
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
  posts: PropTypes.arrayOf(propTypeCommons.post).isRequired,
};

export default PostsGrid;
