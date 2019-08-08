import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { PostGraphics, PostMainHeading, Breadcrumbs } from 'components';

const SectionWrapper = styled.section`
  width: 100%;

  box-sizing: border-box;
  padding: 15px;
`;

const HeadingSection = ({ title, category, icon, path }) => (
  <SectionWrapper>
    <Breadcrumbs path={path} />
    <PostMainHeading>{title}</PostMainHeading>
    <PostGraphics category={category} icon={icon} />
  </SectionWrapper>
);

HeadingSection.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default HeadingSection;
