import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const SectionWrapper = styled.section`
  border: 1px solid black;
  min-height: 400px;
  padding: 15px;

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
    box-sizing: border-box;
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
