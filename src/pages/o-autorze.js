import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import bulb from 'assets/images/bulb.svg';
import target from 'assets/images/target.svg';
import lukas from 'assets/images/lukasDesk.svg';
import thumbUp from 'assets/images/thumbUp.svg';
import blot1 from 'assets/images/blot1.svg';
import blot2 from 'assets/images/blot2.svg';
import blot3 from 'assets/images/blot3.svg';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs, TextWithIcon } from 'components';
import {
  StyledHeading,
  StyledTextParagraph,
  StyledContainer,
} from '../layouts/shared/styled';
import Decoration from '../layouts/o-autorze/Decoration';

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;

const About = ({ location: { pathname } }) => (
  <MainLayout path={pathname}>
    <SEO title="O autorze" />
    <BreadcrumbsWrapper>
      <Breadcrumbs path={pathname} />
    </BreadcrumbsWrapper>
    <StyledContainer>
      <Decoration src={thumbUp} right="-10px" top="60px" isTop />
      <Decoration src={blot1} left="-300px" top="150px" isTop isLeft />
      <Decoration src={blot2} right="-200px" bottom="800px" />
      <Decoration src={blot3} left="-40px" bottom="100px" isLeft />
      <StyledHeading>Witaj w Wielopokoleniowym świecie!</StyledHeading>
      <StyledTextParagraph>
        Kim jestem? Od wielu lat, na pytanie o wykonywany zawód - odpowiadam, że piszę ludziom testamenty. To prawda. Napisałem ich już kilka tysięcy.
        Niektórzy pytają, czy jestem notariuszem, inni robią dziwną minę i
        stwierdzają, że ha ha, ale ja jeszcze nie wybieram się na tamten świat.
        Jeszcze inni zaczynają drążyć… Testament to w tym wypadku jedynie hasło
        i pretekst do dalszej rozmowy.
        <br />
        <br />
        Jestem doradcą sukcesyjnym i prawnikiem, który pomaga
        ludziom podejmować ważne, życiowe decyzje. Jak, komu i kiedy przekazać
        majątek i podzielić go pomiędzy dzieci? Jak przeprowadzić sukcesję
        biznesu rodzinnego (i nierodzinnego)? Jak w perspektywie
        wielopokoleniowej budować silną i zamożną rodzinę, dbać o relacje i
        solidne fundamenty?
      </StyledTextParagraph>

      <TextWithIcon src={bulb} isBlue>
        <h3>
          Dlaczego bloguję i skąd pomysł, aby stworzyć{' '}
          <span>Wielopokoleniowych</span>?
        </h3>
        <StyledTextParagraph>
          Zajmuję się przede wszystkim doradztwem sukcesyjnym i widzę, jak wiele
          błędów popełnianych jest przy podejmowaniu istotnych, majątkowych
          decyzji. Ile krąży nieporozumień, potocznych prawd albo tabu. Jak
          wiele potencjału i środków marnuje się na nieprzemyślane działania,
          koszty albo niepotrzebne spory.
          <br />
          <br />
          Sukcesja jest wyjątkowo interdyscyplinarna. Przy jej planowaniu
          potrzebni są specjaliści z wielu dziedzin i mało kto potrafi zrobić to
          dobrze. O tym też będę pisał i podzielę się z Tobą wieloma moimi
          pomysłami, co można zrobić lepiej. Dzielenie się wiedzą tkwi we mnie
          od lat. Uwielbiam pisać i szkolić, robię to z powodzeniem od dawna.
          Wszystkie programy szkoleniowe napisałem sam – to nie jest wiedza
          zapożyczona z amerykańskich książek, tylko czysta praktyka i
          doświadczenie z osobistej pracy z kilkunastoma tysiącami osób.
        </StyledTextParagraph>
      </TextWithIcon>

      <StyledTextParagraph>
        Mam już trochę doświadczeń blogowych, zdarzają mi się występy gościnne
        np. u Marcina Iwucia czy Radka Budnickiego. Może niektórzy pamiętają
        także portal <strong>planowaniespadkowe.pl</strong>, który prowadziłem w
        latach 2012-2017. Nie było to jednak projekt dojrzały, ani
        profesjonalny. Teraz przyszedł czas na blog z prawdziwego zdarzenia 😉
        <br />
        <br />
        Na co dzień jestem prezesem spółki doradczej Kancelaria Sukcesyjna sp. z
        o.o., w ramach której świadczę usługi doradztwa sukcesyjnego i prawnego.
        To moja główna działalność. Od niedawna funkcjonuje także spółka Finanse
        Osobiste sp. z o.o., w której rozwijam działalność polegającą na
        dostarczaniu najlepszych rozwiązań finansowych, które towarzyszą
        sukcesji. O finansach osobistych na blogu będzie także sporo.
        <br />
        <br />
        Obie spółki należą do Wielopokoleniowi sp. z o.o., w której jestem
        wspólnikiem i prezesem zarządu. Prowadzę przez nią blog i planuję
        rozwijać działalność popularyzatorską i edukacyjną. Blog
        Wielopokoleniowi.pl to moje kolejne spełnione Marzenie i Wielka
        Przygoda, z którą mam zamiar pozostać na dłużej. Wielopokoleniowi to
        także prezent dla mnie. Blog wystartował 16 lutego 2021 roku. Dokładnie
        w moje 45 urodziny!
      </StyledTextParagraph>

      <TextWithIcon src={target} isRight isBlue>
        <h3>
          Udało mi się już spełnić kilka Marzeń. Uwaga, uwaga, będę się chwalił:
        </h3>
        <ul>
          <li>
            <StyledTextParagraph>
              <strong>Na początek klika liczb:</strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                - od 2000 r. prowadzę własną kancelarię prawną, początki szkoleń
                i doradztwa sukcesyjnego to 2004 r., a od 2007 r. zajmuję się
                wyłącznie sukcesją,
                <br />
                - za mną już przeszło 1500 szczegółowo przeanalizowanych
                sytuacji sukcesyjnych i 500 kompleksowych planów sukcesji w
                biznesie, niektórymi rodzinami opiekuję się już 6-8 lat,
                <br />
                - w moich szkoleniach wzięło udział przeszło 20.000 osób 
                    - głównie przedsiębiorców, prawników i agentów
                ubezpieczeniowych.
              </span>
            </StyledTextParagraph>
          </li>
          <li>
            <StyledTextParagraph>
              <strong>Zdarza mi się pomagać nie tylko „za kasę”.</strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                Od kilku lat wspieram Kampanię{' '}
                <a
                  href="http://www.napisztestament.org.pl/"
                  target="blank"
                  noopenner
                  noreferrer
                >
                  Napisz Testament
                </a>
                , a także inne projekty.
              </span>
            </StyledTextParagraph>
          </li>
          <li>
            <StyledTextParagraph>
              <strong>Udzielam się trochę naukowo.</strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                Póki co mam na koncie kilka publikacji naukowych na temat
                różnych odcieni sukcesji, publikuję w wydawnictwach prawniczych
                i ekonomicznych.
              </span>
            </StyledTextParagraph>
          </li>
          <li>
            <StyledTextParagraph>
              <strong>
                I chyba najważniejsze, bo ma najszersze oddziaływanie:
              </strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                Mam chociaż trochę wpływ na to, jak stosuje się prawo (szkolenia
                m.in. dla radców prawnych) oraz się je tworzy – jako konsultant
                społeczny brałem udział m.in. w pracach nad ustawą o zarządzie
                sukcesyjnym oraz ustawą o fundacjach rodzinnych.
              </span>
            </StyledTextParagraph>
          </li>
        </ul>
      </TextWithIcon>

      <TextWithIcon src={lukas} isBlue>
        <h3>Co poza tym?</h3>
        <StyledTextParagraph>
          Staram się żyć normalnie i raczej skromnie. Mam rodzinę, przyjaciół,
          ogródek działkowy i pasjami uwielbiam jazz. Od kilku lat Jazz nad Odrą
          to moje ulubione miejsce do życia - pod koniec kwietnia znikam na pięć
          dni. Mieszkam we Wrocławiu, więc mam blisko - do Impartu 10 minut na
          piechotę.
          <br />
          Mam nadzieję, że <strong>Wielopokoleniowi</strong> staną się częścią
          Twojego rozwoju osobistego i że będę miał w niego swój mały wkład.
          <br />
          <br />
          Cieszę się, że tutaj jesteś i dzielisz ze mną swój czas 😊
          <br />
          <i>Łukasz Martyniec</i>
        </StyledTextParagraph>
        <br />
        <StyledTextParagraph>
          p.s. Więcej informacji na mój temat znajdziesz{' '}
          <a href="https://kancelariasukcesyjna.pl/" noreferrer noopenner>
            tutaj
          </a>{' '}
          i{' '}
          <a
            href="https://pl.linkedin.com/in/łukasz-martyniec-85b95860"
            noopenner
            noreferrer
          >
            tutaj
          </a>
          .
        </StyledTextParagraph>
      </TextWithIcon>
    </StyledContainer>
  </MainLayout>
);

About.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default About;
