import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';
import TileIcon from './TileIcon';
import { DescriptionWrapper, P, StyledArticleHeading } from './TileDescription';

const ArticleTile = ({ post }) => {
  return (
    <TileWrapper>
      <TileIcon category={post.category} icon={post.icon.url}>
        icon
      </TileIcon>
      <DescriptionWrapper>
        <StyledArticleHeading>{post.title}</StyledArticleHeading>
        <P>{post.body.text}</P>
      </DescriptionWrapper>
    </TileWrapper>
  );
};

ArticleTile.propTypes = {
  post: PropTypes.instanceOf(Array).isRequired,
};

export default ArticleTile;
