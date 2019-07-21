import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GridArticleHeading } from '../Headings/Headings';
import TileWrapper from './TileWrapper';
import TileIcon from './TileIcon';
import DescriptionWrapper from './DescriptionWrapper';

const StyledArticleHeading = styled(GridArticleHeading)`
  margin: 10px 0;
  ${({ theme }) => theme.media.above.l} {
    margin: 20px 0;
  }
`;

const ArticleTile = ({ post }) => {
  return (
    <TileWrapper>
      <TileIcon category={post.category} icon={post.icon.url}>
        icon
      </TileIcon>
      <DescriptionWrapper>
        <StyledArticleHeading>{post.title}</StyledArticleHeading>
        <p>{post.category}</p>
      </DescriptionWrapper>
    </TileWrapper>
  );
};

ArticleTile.propTypes = {
  post: PropTypes.instanceOf(Array).isRequired,
};

export default ArticleTile;
