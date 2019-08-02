import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { PostFooter } from 'components';

const SectionWrapper = styled.section`
  min-height: 400px;
  padding: 15px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 150%;
  }
`;

const Text = styled.section`
  font-family: ${({ theme }) => theme.font.family.roboto};
`;

const BodySection = ({ content }) => {
  return (
    <SectionWrapper>
      <Text>{content}</Text>
      <PostFooter />
    </SectionWrapper>
  );
};

BodySection.propTypes = {
  content: PropTypes.element.isRequired,
};

export default BodySection;
