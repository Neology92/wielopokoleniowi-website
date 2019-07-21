import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';
import TileIcon from './TileIcon';
import { DescriptionWrapper, P, StyledPostHeading } from './TileDescription';

const PostTile = ({ post }) => {
  return (
    <TileWrapper>
      <TileIcon category={post.category} icon={post.icon.url}>
        icon
      </TileIcon>
      <DescriptionWrapper>
        <StyledPostHeading>{post.title}</StyledPostHeading>
        <P>{post.body.text}</P>
      </DescriptionWrapper>
    </TileWrapper>
  );
};

PostTile.propTypes = {
  post: PropTypes.instanceOf(Array).isRequired,
};

export default PostTile;
