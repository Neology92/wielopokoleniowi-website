import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { About, TagsBoard, Recommended } from 'components';

const SectionWrapper = styled.section`
  width: 100%;

  ${({ theme }) => theme.media.above.l} {
    width: 34%;
    box-sizing: border-box;
    padding: 15px;
  }
`;

const SidebarSection = ({ tags, recommendedPostsEdges }) => {
  return (
    <SectionWrapper>
      <About />
      <Recommended recommendedPostsEdges={recommendedPostsEdges} />
      <TagsBoard tags={tags} />
    </SectionWrapper>
  );
};

SidebarSection.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  recommendedPostsEdges: PropTypes.arrayOf(PropTypes.node),
};

SidebarSection.defaultProps = {
  recommendedPostsEdges: [],
};
export default SidebarSection;
