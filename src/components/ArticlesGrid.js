import React, { Component } from 'react';
import styled from 'styled-components';

import ArticleTile from './ArticleTile';

const ArtcilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px 10px;
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
