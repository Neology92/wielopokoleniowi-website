import React from 'react';
import styled from 'styled-components';

import { SectionHeading, TextParagraph, Button, LukasDesk } from 'components';

const InnerWrapper = styled.div`
  margin: 30px 10px 0;
  text-align: center;

  ${({ theme }) => theme.media.above.s} {
    width: 454px;
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 585px;
    margin: 60px auto 91px;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 754px;
    margin: 93px auto;
  }
`;

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const AboutSection = () => (
  <SectionWrapper>
    <InnerWrapper>
      <SectionHeading>O autorze</SectionHeading>
      <TextParagraph>Cześć, witaj w moim świecie!</TextParagraph>
      <TextParagraph>
        Kim jestem? Od wielu lat przedstawiam się jako „gość, który pisze
        ludziom testamenty”. To prawda. Napisałem ich już grubo ponad tysiąc.
        Niektórzy pytają, czy jestem notariuszem, inni robią dziwną minę i
        stwierdzają, że „ha ha, ale ja jeszcze nie wybieram się na tamten
        świat”. Jeszcze inni zaczynają drążyć… Testament to w tym wypadku tylko
        hasło i pretekst do dalszej rozmowy.
      </TextParagraph>
    </InnerWrapper>

    <LukasDesk />

    <Button>Czytaj</Button>
  </SectionWrapper>
);

export default AboutSection;
