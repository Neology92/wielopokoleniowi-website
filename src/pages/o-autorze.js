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
} from '../layouts/o-autorze/styled';
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
      <StyledHeading>Cześć, witaj w moim świecie!</StyledHeading>
      <StyledTextParagraph>
        Kim jestem? Od wielu lat przedstawiam się jako „gość, który pisze
        ludziom testamenty”. To prawda. Napisałem ich już grubo ponad tysiąc.
        Niektórzy pytają, czy jestem notariuszem, inni robią dziwną minę i
        stwierdzają, że „ha ha, ale ja jeszcze nie wybieram się na tamten
        świat”. Jeszcze inni zaczynają drążyć… Testament to w tym wypadku tylko
        hasło i pretekst do dalszej rozmowy. Nie, nie jestem po prostu
        prawnikiem, ani sprzedawcą polis na życie, choć jednych i drugich szkolę
        od ponad 15 lat. Jestem doradcą sukcesyjnym, który skończył kiedyś prawo
        i pomaga ludziom podejmować bardzo ważne dla nich decyzje. Jak przy
        pomocy posiadanego majątku zabezpieczyć się na starość? Jak, komu i
        kiedy przekazać biznes albo rodzinny majątek? Jak w perspektywie
        wielopokoleniowej budować silną rodzinę? Na co trzeba zwrócić uwagę - na
        wszystkich płaszczyznach istotnych dla procesu sukcesji, choć przede
        wszystkim od strony majątkowej: prawnej i finansowej. Wiem także, gdzie
        kończy się moja wiedza - współpracuję z szeregiem specjalistów z różnych
        dziedzin, którzy także pomagają z sukcesji. Wielu z nich zgodziło się
        zostać moimi gośćmi na Wielopokoleniowych. Dość dobrze orientuję się w
        kwestiach prawnych, podatkowych i finansowych, ale nie one są
        najważniejsze. Zawsze stoję po stronie grupy osób, którymi się opiekuję,
        czyli szkolę albo doradzam. Najczęściej jest to rodzina albo wspólnicy
        firmy - rzadko pracuję tylko z jedną osobą. Staram się spojrzeć na
        sytuację z góry i poszukać takich rozwiązań, które zadowolą wszystkich.
        Nie reprezentuję jednej osoby w sporze z pozostałymi, częściej działam
        jako mediator albo superarbiter, niż pełnomocnik.
        <br />
        <br />
        Dla jasności - formalnie jestem prawnikiem, czyli absolwentem studiów
        prawniczych. Nigdy nie starałem się o żadną aplikację, nie jestem
        adwokatem ani radcą prawnym. Prawo i finanse traktuję jako szkielet, w
        oparciu o który buduję plan sukcesji, tj. rozłożonego w czasie i
        uporządkowanego przekazania majątku rodzinnego lub biznesu dzieciom,
        albo tzw. plan awaryjny, czyli zabezpieczenie na wypadek śmierci. Poza
        doradztwem niczego nie sprzedaję. Nie proponuję nikomu konkretnych
        rozwiązań finansowych, zagranicznych spółek w pakiecie czy optymalizacji
        podatkowej. Wiem, że mogą być przydatne, ale nie powinny być celem samym
        w sobie. Najważniejsze jest przecież zupełnie co innego.
      </StyledTextParagraph>

      <TextWithIcon src={bulb} isBlue>
        <h3>
          Dlaczego bloguję i skąd pomysł, aby stworzyć Wielopokoleniowych?
        </h3>
        <StyledTextParagraph>
          Dzielenie się wiedzą tkwi we mnie od lat. Od kiedy pamiętam, uwielbiam
          stać przed ludźmi i opowiadać im o tym, co wymyśliłem w kwestii
          sukcesji i planowania spadkowego - praktycznie od 1998 r. interesuję
          się tą tematyką, a szkolę mniej więcej od 2005 r. Ponoć jestem w tym
          niezły - na liczniku mam już prawie 20.000 słuchaczy, a wszystkie
          szkolenia i wystąpienia ułożyłem sam. To nie jest wyczytane z
          amerykańskich książek, ani „zapożyczone” od kogokolwiek w Polsce - to
          są w całości moje autorskie szkolenia i pomysły. Mam też na koncie
          kilkadziesiąt popularyzatorskich i naukowych publikacji, głównie na
          temat sukcesji biznesu rodzinnego, o którym też będę tutaj pisał.
        </StyledTextParagraph>
      </TextWithIcon>

      <StyledTextParagraph>
        Mam już trochę doświadczeń blogowych. Na blogu
        <strong> Finanse Bardzo Osobiste u Marcina Iwucia </strong>
        znajdziesz kilka wpisów z moim udziałem - w tym dwa podcasty i dwa
        webinary. W latach 2012-2017 prowadziłem także portal
        planowaniespadkowe.pl, na którym poruszałem tematykę sukcesji. Nie było
        to jednak projekt dojrzały, ani profesjonalny. Teraz przyszedł czas na
        blog z prawdziwego zdarzenia ;) Chcę dzielić się wiedzą, pokazywać
        problemy oraz dobre praktyki w tym zakresie, które udało się z
        powodzeniem wdrożyć w biznesie rodzinnym. Wprowadziłem przeszło 400
        kompleksowych planów sukcesji majątkowej w biznesie, w kilkudziesięciu
        rodzinach doradzam już od 5-8 lat. Jestem współautorem pierwszych
        konstytucji rodzinnych w Polsce i opracowań na temat ładu rodzinnego.
        <br />
        <br />
        Domyślam się, że na 98% są to pojęcia dla Ciebie nowe. Tutaj postaram
        się pisać prosto, najprościej jak potrafię (patrz 6 Zasada
        Wielopokoleniowych), żeby z nieco odmiennej pokazać Ci świat ważnych,
        życiowych, rodzinnych i biznesowych decyzji, które każdy z nas podejmuje
        i będzie podejmował przez całe życie. Pokażę wiele przykładów i historii
        z życia wziętych. Nie wszystkie są fajne i pozytywne. Wiele jest
        smutnych czy zakończonych porażką. Chcę, abyś - jeśli postanowisz ze mną
        zostać i czytać dalej - mógł uczyć się na błędach innych, a także
        czerpać z nich przykład. Wiele rozwiązań, o których tutaj piszę, są
        moimi pomysłami wypraktykowanymi w pracy z rodzinami w przeróżnych
        sytuacjach życiowych czy biznesowych. Ale ten blog jest przede wszystkim
        dla „zwyczajnych” ludzi, którzy nie prowadzą biznesu. Jest dla każdego.
      </StyledTextParagraph>

      <TextWithIcon src={target} isRight isBlue>
        <h3>
          Udało mi się już spełnić kilka Marzeń. Uwaga, uwaga, będę się chwalił:
        </h3>
        <ul>
          <li>
            <StyledTextParagraph>
              <strong>
                Zaufanie i współpraca z moimi Guru (bardzo Wam dziękuję!):
              </strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                Adrianną Lewandowską, Pawłem „Pawelcem” Ratajem, Wiesią
                Machalicą, Ewą Więcek-Janką, Marcinem Iwuciem, Katarzyną
                Stróżyńską, Marią Adamską, Eweliną Szeratics, Marią Olszewską i
                bardzo, bardzo wieloma innymi osobami, które miałem zaszczyt i
                przyjemność poznać
              </span>
            </StyledTextParagraph>
          </li>
          <li>
            <StyledTextParagraph>
              <strong>Zdarza mi się pomagać nie tylko „za kasę”.</strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                Od kilku lat wspieram Kampanię Napisz Testament, a także inne
                projekty, ale o nich nie napiszę publicznie,
              </span>
            </StyledTextParagraph>
          </li>
          <li>
            <StyledTextParagraph>
              <strong>Udzielam się trochę naukowo.</strong>
            </StyledTextParagraph>
            <StyledTextParagraph>
              <span>
                Regularnie odwiedzając Konferencję Naukową Firmy Rodzinne w
                Łodzi, głosząc referaty i publikując nt. sukcesji (niewielu jest
                prawników, którzy publikują dla ekonomistów i specjalistów od
                zarządzania),
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
                Mamy mój mały wpływ na to, jak stosuje się prawo (szkolenia
                m.in. dla radców prawnych) oraz się je tworzy (jako ekspert
                Instytutu Biznesu Rodzinnego brałem udział w pracach nad kilkoma
                ustawami w Ministerstwie Przedsiębiorczości i Technologii - mam
                już kilkanaście „swoich” przepisów, a część z nich - jak mi się
                wydaje - jest nawet dosyć istotna). Wielopokoleniowi to moje
                kolejne spełnione Marzenie i Wielka Przygoda, z którą mam zamiar
                zostać na dłużej.
              </span>
            </StyledTextParagraph>
          </li>
        </ul>
      </TextWithIcon>

      <TextWithIcon src={lukas} isBlue>
        <h3>Co poza tym?</h3>
        <StyledTextParagraph>
          Staram się żyć normalnie i raczej skromnie. Mam rodzinę, przyjaciół,
          ogródek działkowy (choć tak naprawdę jest trochę bardziej mojej
          koleżanki Małżonki, niż mój), kota i pasjami uwielbiam jazz. Od kilku
          lat Jazz nad Odrą to moje ulubione miejsce do życia - pod koniec
          kwietnia znikam na kilka dni. Mieszkam we Wrocławiu, więc mam blisko -
          do Impartu 10 minut na piechotę ;) Jestem też wielkim fanem rozwoju
          osobistego - sporo czytam, słucham audiobooków, podcastów i ćwiczę na
          TEDex’a. Mam nadzieję, że Wielopokoleniowi staną się częścią Twojego
          rozwoju osobistego i że będę miał przez to w niego swój mały wkład.
          Cieszę się, że tutaj jesteś i dzielisz ze mną swój czas :)
        </StyledTextParagraph>
      </TextWithIcon>
    </StyledContainer>
  </MainLayout>
);

About.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default About;
