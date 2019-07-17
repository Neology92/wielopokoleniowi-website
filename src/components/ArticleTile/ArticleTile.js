import React from 'react';
import PropTypes from 'prop-types';

import { GridArticleHeading } from '../Headings/Headings';
import TileWrapper from './TileWrapper';
import TileIconBg from './TileIconBg';

const ArticleTile = ({ post }) => {
  return (
    <TileWrapper>
      <TileIconBg />
      <GridArticleHeading category={post.category}>
        {post.title}
      </GridArticleHeading>
      <p>{post.category}</p>
    </TileWrapper>
  );
};

ArticleTile.propTypes = {
  post: PropTypes.instanceOf(Array).isRequired,
};

export default ArticleTile;
