import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const SectionWrapper = styled.section`
  border: 1px solid red;
  width: 100%;
  height: 100px;
`;

const HeadingSection = ({ title }) => {
  return (
    <SectionWrapper>
      <h1>{title}</h1>
    </SectionWrapper>
  );
};

HeadingSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeadingSection;
