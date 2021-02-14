/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs, Rules } from 'components';

import pagesIcon from 'assets/images/pages.svg';

import {
  StyledHeading,
  StyledTextParagraph,
  StyledContainer,
} from '../layouts/shared/styled';

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const Pages = styled.img`
  display: block;
  width: 30%;
  margin: 40px auto;
`;

const ZasadyWielopokoleniowych = ({ location: { pathname } }) => (
  <MainLayout path={pathname}>
    <SEO title="Zasady Wielopokoleniowych" />
    <BreadcrumbsWrapper>
      <Breadcrumbs path={pathname} />
    </BreadcrumbsWrapper>
    <StyledContainer>
      <StyledHeading>Zasady Wielopokoleniowych</StyledHeading>
      <StyledTextParagraph>
        Chcę, aby ten blog to było <b>takie moje małe miejsce na ziemi.</b>{' '}
        Gdzie mogę być sobą i robić to, co od lat uwielbiam: dzielić się wiedzą
        😊
      </StyledTextParagraph>
      <br />
      <StyledTextParagraph>
        Ponieważ blogowanie siedzi we mnie już od dawna, a Wielopokoleniowi
        wykluwali się w mojej głowie przez dobre kilka lat, postanowiłem przyjąć
        sam dla siebie kilka zasad, których zamierzam się trzymać. Część z nich
        wynika z moich osobistych doświadczeń i zapatrywań, część przyjąłem jako
        własne z inspiracji moich bardziej doświadczonych koleżanek i kolegów
        blogerów i podcasterów. Zanim zagłębisz się bardziej w temat, zapoznaj
        się z tymi Zasadami.
      </StyledTextParagraph>
      <br />
      <H3 style={{ fontFamily: 'Roboto' }}>Oto zasady przyjęte na blogu:</H3>
      <Pages src={pagesIcon} alt="Zasady Wielopokoleniowych" />

      <Rules />

      <br />
      <br />
      <br />
      <StyledTextParagraph>
        Uff… To chyba wszystkie zasady, które na teraz przychodzą mi do głowy.
        Sądzę, że warto opisać kilka rzeczy i moje do nich podejście. Będzie się
        do czego odnosić w razie wątpliwości 😊
      </StyledTextParagraph>
      <br />
      <StyledTextParagraph>
        Ciekaw jestem, co Ty na to? A także, jak - szczególnie w dzisiejszych
        czasach, kiedy z różnych stron wmawia się nam, że więcej nas dzieli, niż
        łączy - przyjmiesz <b>Wielopokoleniowe idee</b>? Że warto{' '}
        <b>świadomie</b>, <b>razem</b> i <b>w zgodzie</b>!
      </StyledTextParagraph>
      <br />
    </StyledContainer>
  </MainLayout>
);

ZasadyWielopokoleniowych.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default ZasadyWielopokoleniowych;
