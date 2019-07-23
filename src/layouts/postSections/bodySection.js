import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const SectionWrapper = styled.main`
  border: 1px solid black;
  min-height: 400px;

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
    font-size: 16px;
    line-height: 150%;
  }
`;

const BodySection = ({ content }) => {
  return <SectionWrapper>{content}</SectionWrapper>;
};

BodySection.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BodySection;
