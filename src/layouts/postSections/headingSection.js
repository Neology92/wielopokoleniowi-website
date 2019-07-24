import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { PostGraphics, PostMainHeading } from 'components';

const SectionWrapper = styled.section`
  width: 100%;

  box-sizing: border-box;
  padding: 15px;
`;

const HeadingSection = ({ title, category, icon }) => (
  <SectionWrapper>
    <PostMainHeading>{title}</PostMainHeading>
    <PostGraphics category={category} icon={icon} />
  </SectionWrapper>
);

HeadingSection.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default HeadingSection;
