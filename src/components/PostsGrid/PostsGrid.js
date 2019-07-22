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
        everyone: postsConnection(
          first: 6
          orderBy: createdAt_DESC
          where: { category: Everyone }
        ) {
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
        bussines: postsConnection(
          first: 6
          orderBy: createdAt_DESC
          where: { category: Bussines }
        ) {
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
      {data.graphcms.everyone.edges.map(({ node }) => (
        <StyledLink key={node.id} to={`/${slugify(node.title.toLowerCase())}`}>
          <PostTile post={node} />
        </StyledLink>
      ))}
      {data.graphcms.bussines.edges.map(({ node }) => (
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
