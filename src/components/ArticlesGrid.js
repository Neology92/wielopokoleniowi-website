import React, { Component } from 'react';
import styled from 'styled-components';

import ArticleTile from './ArticleTile';

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

// eslint-disable-next-line
export default class ArticlesGrid extends Component {
  render() {
    return (
      <ArtcilesWrapper>
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
      </ArtcilesWrapper>
    );
  }
}
