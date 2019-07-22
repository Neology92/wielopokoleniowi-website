import React from 'react';
import styled from 'styled-components';

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

const WelcomeSection = () => (
  <SectionWrapper>
    <InnerWrapper>
      <SectionHeading>Łączy nas PRZYSZŁOŚĆ</SectionHeading>
      <TextParagraph>
        Jeśli dbasz o siebie, swoją rodzinę, majątek lub firmę - znalazłeś się w
        dobrym miejscu. Wielopokoleniowi to blog o relacjach rodzinnych,
        majątku, pieniądzach, dziedziczeniu i sukcesji międzypokoleniowej. O
        tym, jak mądrze budować majątek i biznes oraz w jaki sposób przekazywać
        go z pokolenia na pokolenie. Jak dbać o wzajemne relacje i zapobiegać
        rodzinnym waśniom, problemom prawnym albo finansowym. To jest miejsce
        dla każdego, kto patrzy dalej w Przyszłość! Zostań z nami na dłużej i
        daj się wciągnąć!
      </TextParagraph>
      <StyledTextParagraph>Cieszę się, że tu zajrzałeś!</StyledTextParagraph>
      <TextParagraph>Łukasz Martyniec</TextParagraph>
    </InnerWrapper>
    <FamilyLeft />
    <FamilyRight />
  </SectionWrapper>
);

export default WelcomeSection;
