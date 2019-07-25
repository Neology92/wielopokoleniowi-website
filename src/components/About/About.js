import React from 'react';

import { AboutWrapper, InnerWrapper } from './AboutWrapper';
import { SidebarHeading } from '../Headings/Headings';
import { StyledButton } from './styled';

const About = () => {
  return (
    <AboutWrapper>
      <InnerWrapper>
        <SidebarHeading>O autorze</SidebarHeading>
        <StyledButton>Czytaj</StyledButton>
      </InnerWrapper>
    </AboutWrapper>
  );
};

export default About;
