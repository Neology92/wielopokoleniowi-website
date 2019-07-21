import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { useStaticQuery, graphql, Link } from 'gatsby';

import PostTile from '../PostTile/PostTile';
import PostsGridWrapper from './PostsGridWrapper';

const PostsGrid = () => {
  const data = useStaticQuery(graphql`
    {
      graphcms {
        posts {
          id
          title
          category
          body {
            html
            text
          }
          icon {
            url
          }
        }
      }
    }
  `);

  return (
    <PostsGridWrapper>
      {data.graphcms.posts.map(post => (
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

export default PostsGrid;
