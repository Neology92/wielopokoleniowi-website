import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import ArticleTile from '../ArticleTile/ArticleTile';

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
          }
          icon {
            url
          }
        }
      }
    }
  `);

  return (
    <ArtcilesWrapper>
      {data.graphcms.posts.map(post => (
        <ArticleTile post={post} key={post.id} />
      ))}
    </ArtcilesWrapper>
  );
};
const ArtcilesWrapper = styled.div`
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 165px);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px 10px;
  justify-content: center;

  ${({ theme }) => theme.media.above.s} {
    grid-template-columns: repeat(2, 165px);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 30px 36px;
  }

  ${({ theme }) => theme.media.above.m} {
    grid-template-columns: repeat(3, 165px);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px 36px;
  }

  ${({ theme }) => theme.media.above.l} {
    grid-template-columns: repeat(2, 327px);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 30px 36px;
  }

  ${({ theme }) => theme.media.above.xl} {
    grid-template-columns: repeat(3, 327px);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px 36px;
  }
`;

export default ArticlesGrid;
