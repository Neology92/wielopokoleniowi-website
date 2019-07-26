import React from 'react';
import PropTypes from 'prop-types';

import TagsWrapper from './TagsWrapper';
import BoardWrapper from './BoardWrapper';
import TagChunk from './TagChunk';
import { SidebarSectionHeading } from '../Headings/Headings';

const TagsBoard = ({ tags }) => (
  <BoardWrapper>
    <SidebarSectionHeading>Tagi</SidebarSectionHeading>
    <TagsWrapper>
      {tags.map(tag => {
        return <TagChunk key={tag}>{tag}</TagChunk>;
      })}
    </TagsWrapper>
  </BoardWrapper>
);

TagsBoard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagsBoard.defaultProps = {
  tags: [],
};

export default TagsBoard;
