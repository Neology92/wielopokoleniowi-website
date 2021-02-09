import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { About, TagsBoard, Recommended } from 'components';
import propTypeCommons from '../../utils/propTypeCommons';

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
  recommendedPosts: PropTypes.arrayOf(propTypeCommons.post),
};

SidebarSection.defaultProps = {
  recommendedPosts: [],
};
export default SidebarSection;
