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
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    body: PropTypes.shape({
      html: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    icon: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostTile;
