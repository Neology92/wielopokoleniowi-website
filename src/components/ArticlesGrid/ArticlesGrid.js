import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { useStaticQuery, graphql, Link } from 'gatsby';

import ArticleTile from '../ArticleTile/ArticleTile';
import ArticlesGridWrapper from './ArticlesGridWrapper';

const ArticlesGrid = () => {
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
    <ArticlesGridWrapper>
      {data.graphcms.posts.map(post => (
        <StyledLink key={post.id} to={`/${slugify(post.title.toLowerCase())}`}>
          <ArticleTile post={post} />
        </StyledLink>
      ))}
    </ArticlesGridWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default ArticlesGrid;
