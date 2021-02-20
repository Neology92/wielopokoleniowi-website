import React from 'react';
import styled from 'styled-components';

import { lazyLoad } from 'assets/styles/keyframes';

import {
  SectionHeading,
  TextParagraph,
  FamilyLeft,
  FamilyRight,
} from 'components';

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

const StyledTextParagraph = styled(TextParagraph)`
  margin: 18px 0 0;
`;

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledFamilyLeft = styled(FamilyLeft)`
  ${({ theme }) => theme.media.above.m} {
    animation: ${lazyLoad} 0.8s ease-in-out;
  }
`;

const StyledFamilyRight = styled(FamilyRight)`
  ${({ theme }) => theme.media.above.m} {
    animation: ${lazyLoad} 0.8s ease-in-out;
  }
`;

const WelcomeSection = () => (
  <SectionWrapper>
    <InnerWrapper>
      <SectionHeading>Łączy nas PRZYSZŁOŚĆ</SectionHeading>
      <TextParagraph>
        Jeśli dbasz o siebie, swoją rodzinę, majątek lub firmę - znalazłeś się w
        dobrym miejscu. <i>Wielopokoleniowi<i/>to blog sukcesji, mądrym budowaniu
        majątku i biznesu oraz przekazywaniu ich kolejnym pokoleniom.
      </TextParagraph>
      <StyledTextParagraph>Cieszę się, że tu jesteś!</StyledTextParagraph>
      <TextParagraph><i>Łukasz Martyniec<i/></TextParagraph>
    </InnerWrapper>
    <StyledFamilyLeft />
    <StyledFamilyRight />
  </SectionWrapper>
);

export default WelcomeSection;
