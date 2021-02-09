import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import propTypeCommons from '../../utils/propTypeCommons';

import TileWrapper from './TileWrapper';
import TileIcon from './TileIcon';
import { DescriptionWrapper, P, StyledPostHeading } from './TileDescription';

import DifficultyIndicator from '../DifficultyIndicator/DifficultyIndicator';

const StyledIndicator = styled(DifficultyIndicator)`
  position: absolute;
  top: 0;
  left: 0;
`;

const checkLevel = level => {
  if (level === 'Easy') return 1;
  if (level === 'Medium') return 2;
  return 3;
};

const PostTile = ({ post }) => {
  const difficulty = checkLevel(post.level);

  return (
    <TileWrapper>
      <StyledIndicator level={difficulty} />
      <TileIcon category={post.category} icon={post.icon.url}>
        icon
      </TileIcon>
      <DescriptionWrapper>
        <StyledPostHeading>{post.title}</StyledPostHeading>
        <P>{post.excerpt}</P>
      </DescriptionWrapper>
    </TileWrapper>
  );
};

PostTile.propTypes = {
  post: PropTypes.shape(propTypeCommons.post).isRequired,
};

export default PostTile;
