import React from 'react';
import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO, Menu, SectionHeading, TextParagraph } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 1500px;
`;

const TextSection = styled.section`
  margin: 30px 10px 0;
  text-align: center;
`;

const StyledTextParagraph = styled(TextParagraph)`
  margin: 18px 0 0;
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <StyledContainer>
      <Menu />
      <TextSection>
        <SectionHeading>Łączy nas PRZYSZŁOŚĆ</SectionHeading>
        <TextParagraph>
          Jeśli dbasz o siebie, swoją rodzinę, majątek lub firmę - znalazłeś się
          w dobrym miejscu. Wielopokoleniowi to blog o relacjach rodzinnych,
          majątku, pieniądzach, dziedziczeniu i sukcesji międzypokoleniowej. O
          tym, jak mądrze budować majątek i biznes oraz w jaki sposób
          przekazywać go z pokolenia na pokolenie. Jak dbać o wzajemne relacje i
          zapobiegać rodzinnym waśniom, problemom prawnym albo finansowym. To
          jest miejsce dla każdego, kto patrzy dalej w Przyszłość! Zostań z nami
          na dłużej i daj się wciągnąć!
        </TextParagraph>
        <StyledTextParagraph>Cieszę się, że tu zajrzałeś!</StyledTextParagraph>
        <TextParagraph>Łukasz Martyniec</TextParagraph>
      </TextSection>
    </StyledContainer>
  </MainLayout>
);

export default IndexPage;
