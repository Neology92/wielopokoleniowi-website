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
        posts: postsConnection(first: 6, orderBy: createdAt_DESC) {
          edges {
            node {
              title
              category
              level
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
      }
    }
  `);

  return (
    <PostsGridWrapper>
      {data.graphcms.posts.edges.map(({ node }) => (
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

export default PostsGrid;
