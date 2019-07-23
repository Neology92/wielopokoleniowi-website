import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
      <Link to="/o-autorze">
        <StyledButton>Czytaj</StyledButton>
      </Link>
    </TextWrapper>

    <LukasWrapper>
      <div>
        <LukasDesk />
      </div>
      <Link to="/o-autorze">
        <StyledButton>Czytaj</StyledButton>
      </Link>
    </LukasWrapper>
  </SectionWrapper>
);

const StyledButton = styled(Button)`
  padding-left: 25px;
  padding-right: 25px;
`;

const StyledSectionHeading = styled(SectionHeading)`
  ${({ theme }) => theme.media.above.l} {
    margin-bottom: 22px;
    text-align: right;
  }
`;

const SectionWrapper = styled.section`
  margin: 40px auto;
  width: 95%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.media.above.m} {
    margin: 30px auto 0;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 20px auto 0;
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${({ theme }) => theme.media.above.xl} {
    margin: 60px auto 0;
    width: 1070px;
    align-items: flex-start;
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
    width: 600px;
    margin: 60px auto 0;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 500px;
    margin: 93px 0 0 70px;

    p {
      text-align: right;
    }

    button {
      display: block;
      margin: 40px 0 0 auto;
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

  ${({ theme }) => theme.media.above.m} {
    width: 500px;
    margin-top: 30px;
    div {
      width: 300px;
    }

    button {
      margin: 46px;
    }
  }

  ${({ theme }) => theme.media.above.l} {
    margin-left: -25px;
    order: -1;

    div {
      width: 400px;
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
