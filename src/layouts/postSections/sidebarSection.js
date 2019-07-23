import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  border: 1px solid green;
  min-height: 100px;
  width: 100%;

  ${({ theme }) => theme.media.above.m} {
    width: 34%;
  }
`;

const SidebarSection = () => {
  return <SectionWrapper />;
};

export default SidebarSection;
