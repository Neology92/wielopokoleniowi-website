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

const SidebarSection = ({ tags, recommendedPosts }) => {
  return (
    <SectionWrapper>
      <About />
      <Recommended recommendedPosts={recommendedPosts} />
      <TagsBoard tags={tags} />
    </SectionWrapper>
  );
};

SidebarSection.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  recommendedPosts: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

SidebarSection.defaultProps = {
  recommendedPosts: [],
};
export default SidebarSection;
