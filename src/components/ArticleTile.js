import React, { Component } from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  height: 190px;
  width: 165px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.grey};
`;

// eslint-disable-next-line
export default class ArticleTile extends Component {
  render() {
    return (
      <TileWrapper>
        <h6>Artykuł</h6>
      </TileWrapper>
    );
  }
}
