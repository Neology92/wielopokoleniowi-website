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
        Gdzie mogę być sobą i pisać dokładnie o tym, co chcę i w taki sposób, w
        jaki chcę. Nie aspiruję i nie chcę porównywać się z wielkimi tego
        świata, nie chodzi przecież o konkurowanie czy współzawodnictwo. Każdy
        ma swoją ścieżkę.
      </StyledTextParagraph>
      <br />
      <StyledTextParagraph>
        Ponieważ blogowanie siedzi we mnie już od dawna, a Wielopokoleniowi - z
        różnych powodów - rodzili się w bólach przez dobre kilka lat,
        postanowiłem przyjąć sam dla siebie kilka zasad, których zamierzam się
        trzymać. Część z nich wynika z moich osobistych doświadczeń i przekonań,
        część przyjąłem jako własne z inspiracji moich bardziej doświadczonych
        koleżanek i kolegów: pisarzy, blogerów i podcasterów. Od czasu do czasu
        pozwolę sobie nawiązać także do nich, bo gdyby nie oni, byłoby znacznie
        trudniej. Dziękuję.
      </StyledTextParagraph>
      <br />
      <H3 style={{ fontFamily: 'Roboto' }}>
        Oto moje zasady przyjęte na tym blogu:
      </H3>
      <Pages src={pagesIcon} alt="Zasady Wielopokoleniowych" />

      <Rules />

      <br />
      <br />
      <br />
      <StyledTextParagraph>
        Uff… To chyba wszystkie zasady, które na teraz przychodzą mi do głowy.
        Wiem, że trochę się też tłumaczę, ale sądzę, że warto opisać kilka
        rzeczy i moje do nich podejście. Będzie się do czego odnosić w razie
        wątpliwości :)
      </StyledTextParagraph>
      <br />
      <StyledTextParagraph>
        Tak sobie to wszystko piszę i przyszło mi do głowy, że{' '}
        <b>ten blog nie ma być o mnie, ale może jednak trochę dla mnie.</b> Żeby
        móc się wyrazić, uporządkować myśli i z kimś się nimi podzielić. Zdaję
        sobie też sprawę, że czasem mogę wypaść na chwalipiętę. Niekoniecznie
        jest to moją intencją, choć - z drugiej strony - czemu nie, jeśli już
        faktycznie coś udało się zrobić… A kilka rzeczy udało się bardzo dobrze
        i to nie tylko mi, bo zazwyczaj jest to gra zespołowa! Tak czy owak:
        <b>jest satysfakcja</b> :) I to się liczy!
      </StyledTextParagraph>
      <br />
      <StyledTextParagraph>
        Ciekaw jestem też bardzo, co Wy na to? A także, jak - szczególnie w
        dzisiejszych czasach, kiedy z różnych stron wmawia się nam, że więcej
        nas dzieli, niż łączy - przyjmiecie <b> Wielopokoleniowe idee</b>, że
        warto
        <b>świadomie, razem</b> i w <b>zgodzie</b>, czy zarezonuje myślenie i
        czy <b>dobro wróci</b>. Coś mi jednak mówi, że na 100% tak! Przynajmniej
        do czasu do czasu ;)
      </StyledTextParagraph>
    </StyledContainer>
  </MainLayout>
);

ZasadyWielopokoleniowych.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default ZasadyWielopokoleniowych;
