import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GridArticleHeading } from '../Headings/Headings';
import TileWrapper from './TileWrapper';
import TileIconBg from './TileIconBg';

const DescWrapper = styled.div`
  margin: 0 8px;
  width: calc(100% - 16px);
  height: 100%;
  text-align: left;

  p {
    color: rgba(${({ theme }) => theme.color.rgb.nightBlue}, 0.6);
    font-size: 1.2 rem;
  }
  ${({ theme }) => theme.media.above.l} {
    margin: 0 17px;
    p {
      font-size: 1.6 rem;
    }
  }
`;

const ArticleTile = ({ post }) => {
  return (
    <TileWrapper>
      <TileIconBg category={post.category}>icon</TileIconBg>
      <DescWrapper>
        <GridArticleHeading>{post.title}</GridArticleHeading>
        <p>{post.category}</p>
      </DescWrapper>
    </TileWrapper>
  );
};

ArticleTile.propTypes = {
  post: PropTypes.instanceOf(Array).isRequired,
};

export default ArticleTile;
