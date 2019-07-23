import React from 'react';
import styled from 'styled-components';

import { SectionHeading, TextParagraph, Button, LukasDesk } from 'components';

const AboutSection = () => (
  <SectionWrapper>
    <TextWrapper>
      <StyledSectionHeading>O autorze</StyledSectionHeading>
      <TextParagraph>Cześć, witaj w moim świecie!</TextParagraph>
      <TextParagraph>
        Kim jestem? Od wielu lat przedstawiam się jako „gość, który pisze
        ludziom testamenty”. To prawda. Napisałem ich już grubo ponad tysiąc.
        Niektórzy pytają, czy jestem notariuszem, inni robią dziwną minę i
        stwierdzają, że „ha ha, ale ja jeszcze nie wybieram się na tamten
        świat”. Jeszcze inni zaczynają drążyć… Testament to w tym wypadku tylko
        hasło i pretekst do dalszej rozmowy.
      </TextParagraph>
      <StyledButton>Czytaj</StyledButton>
    </TextWrapper>

    <LukasWrapper>
      <div>
        <LukasDesk />
      </div>
      <StyledButton>Czytaj</StyledButton>
    </LukasWrapper>
  </SectionWrapper>
);

const StyledButton = styled(Button)`
  padding-left: 25px;
  padding-right: 25px;
`;

const StyledSectionHeading = styled(SectionHeading)`
  ${({ theme }) => theme.media.above.m} {
    margin-bottom: 22px;
    text-align: right;
  }
`;

const SectionWrapper = styled.section`
  margin: 0 auto;
  width: 95%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.media.above.l} {
    margin: 110px auto 0;
    width: 684px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ${({ theme }) => theme.media.above.xl} {
    margin: 110px auto 0;
    width: 1070px;
  }
`;

const TextWrapper = styled.div`
  margin: 30px 10px 0;
  text-align: center;

  button {
    display: none;
  }

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
    margin: 93px 0 0 70px;

    p {
      text-align: right;
    }

    button {
      display: block;
    }
  }
`;

const LukasWrapper = styled.div`
  margin: 10px auto;
  width: 340px;
  display: flex;
  flex-direction: row;

  div {
    width: 188px;
  }

  button {
    margin: 13px;
  }

  ${({ theme }) => theme.media.above.l} {
    margin-left: -20px;
    order: -1;

    div {
      width: 300px;
    }
    button {
      display: none;
    }
  }

  ${({ theme }) => theme.media.above.xl} {
    margin-left: -30px;

    div {
      width: 493px;
    }
  }
`;

export default AboutSection;
