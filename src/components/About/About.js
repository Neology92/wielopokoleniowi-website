import React from 'react';

import { AboutWrapper, InnerWrapper } from './AboutWrapper';
import {
  SidebarSectionHeading,
  SectionSecondHeading,
} from '../Headings/Headings';
import { StyledButton, StyledTextParagraph } from './styled';

const About = () => {
  return (
    <AboutWrapper>
      <InnerWrapper>
        <SidebarSectionHeading>O autorze</SidebarSectionHeading>
        <SectionSecondHeading>
          Cześć, witaj w moim świecie!{' '}
        </SectionSecondHeading>
        <StyledTextParagraph>
          Kim jestem? Od wielu lat przedstawiam się jako „gość, który pisze
          ludziom testamenty”. To prawda. Napisałem ich już grubo ponad tysiąc.
          Niektórzy pytają, czy jestem notariuszem, inni robią dziwną minę ...
        </StyledTextParagraph>
        <StyledButton to="/o-autorze">Czytaj</StyledButton>
      </InnerWrapper>
    </AboutWrapper>
  );
};

export default About;
