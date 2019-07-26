import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { About, TagsBoard } from 'components';

const SectionWrapper = styled.section`
  min-height: 100px;
  width: 100%;

  ${({ theme }) => theme.media.above.m} {
    width: 34%;
    box-sizing: border-box;
    padding: 15px;
  }
`;

const SidebarSection = ({ tags }) => {
  return (
    <SectionWrapper>
      <About />
      <TagsBoard tags={tags} />
    </SectionWrapper>
  );
};

SidebarSection.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SidebarSection;
