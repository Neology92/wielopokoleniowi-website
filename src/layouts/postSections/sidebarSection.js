import React from 'react';
import styled from 'styled-components';

import { About } from 'components';

const SectionWrapper = styled.section`
  min-height: 100px;
  width: 100%;

  ${({ theme }) => theme.media.above.m} {
    width: 34%;
    box-sizing: border-box;
    padding: 15px;
  }
`;

const SidebarSection = () => {
  return (
    <SectionWrapper>
      <About />
    </SectionWrapper>
  );
};

export default SidebarSection;
