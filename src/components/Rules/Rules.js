/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'gatsby';

import star from 'assets/images/blueStar.svg';
import pointingFinger from 'assets/images/pointingFinger.svg';
import {
  Title,
  Description,
  RuleItem,
  RulesList,
  Ul,
  Li,
  StarImg,
  Category,
  StarsContainer,
  CategoryDesc,
  Hand,
} from './styled';

const Rules = () => {
  return (
    <RulesList>
      <RuleItem>
        <Title>
          To nie jest blog o mnie, to jest blog od Was, o Was i dla Was.
        </Title>
        <Description>
          Noszę w sobie setki ludzkich historii, opinii i doświadczeń. Mam za
          sobą tysiące godzin szczerych rozmów o ważnych, życiowych sprawach i
          decyzjach - tym właśnie mam zamiar się podzielić. Nie wszystkie
          historie są dobre i pozytywne. Są za to prawdziwe i namacalne, a każda
          jest inna. Mam do nich wielki szacunek, dlatego że są przeżyte i
          autentyczne. Po prostu ludzkie. Dlatego nie będę pisał o amerykańskiej
          <i>dreamstory</i>, tylko normalnej rzeczywistości dostępnej każdemu z
          nas.
          <br />
          <br />
          Mam zaszczyt i przyjemność pracować głównie z przedsiębiorcami i
          innymi ludźmi czynu, spotkałem na swojej drodze wielu wspaniałych
          ludzi, którzy na różnych polach odnieśli sukcesy. Dlatego znajdziesz
          tu wiele pozytywnych przykładów i postaw. Mam nadzieję, że siła{' '}
          <i>Wielopokoleniowych</i> &nbsp;będzie płynąć właśnie z tego, aby
          pokazać dobre przykłady, dać szansę zbudować dobre praktyki w każdej
          rodzinie i firmie. Chcę, abyś na tym blogu dostrzegł samego siebie i
          Twoją rodzinę - właśnie jako <i>WIELOPOKOLENIOWĄ</i>. Abyś poszerzył
          perspektywę i podejmował lepsze decyzje, które podniosą jakość Twoich
          relacji i całego życia.
        </Description>
      </RuleItem>

      <RuleItem>
        <Title>Na blogu nie ma doradztwa. To jedynie moje opinie.</Title>
        <Description>
          Wiedz, że będą prawdziwe i szczere. Nie posiadam monopolu na wiedzę, a
          tym bardziej na mądrość. Nie mam gotowych recept, ani śmiałości mówić
          komukolwiek, co jest dobre, a co złe. Znajdziesz na Wielopokoleniowych
          mniej lub bardziej szczegółowe opisy wielu zagadnień prawnych,
          podatkowych czy finansowych, zastrzegam, że{' '}
          <b>
            to nie jest doradztwo: prawne, podatkowe, finansowe, czy
            jakiekolwiek inne. I nie możesz w ten sposób tych wypowiedzi
            traktować.
          </b>{' '}
          Z kilku powodów. Wymienię najważniejsze:
          <br />
          <br />
          <Ul>
            <Li>
              Doradztwo wymaga bezpośredniej relacji pomiędzy doradcą a klientem
              - konieczny jest szczery dialog i zadawanie pytań. Jeden szczegół
              potrafi zmienić obraz całej sytuacji.
            </Li>
            <Li>
              Doradca bierze odpowiedzialność za to co robi i jakie będą skutki
              jego doradztwa.
            </Li>
          </Ul>
          <br />
          Tymczasem blog jest tylko blogiem, liczę, że dzięki niemu Twoje
          relacje z doradcami staną się lepsze. Moim celem jest popularyzować, a
          nie udzielać na blogu wiążących odpowiedzi.
        </Description>
      </RuleItem>

      <RuleItem>
        <Title>Blogowa transparentność finansowa.</Title>
        <Description>
          Sądzę, że tak będzie uczciwie. Prowadzę <i>Wielopokoleniowych</i> za
          własne pieniądze, w ramach należącej do mnie spółki Wielopokoleniowi
          sp. z o.o. Nie ukrywam, że blog jest elementem mojego pomysłu na
          biznes. Wielopokoleniowi sp. z o.o. stoi na czele{' '}
          <b>Grupy Wielopokoleniowi</b>, w ramach której działają już dwie
          spółki-córki:
          <b>Kancelaria Sukcesyjna sp. z o.o.</b>, przez którą świadczę
          wyłącznie usługi doradztwa sukcesyjnego (nie jest sprzedawcą, ani
          pośrednikiem przy sprzedaży produktów finansowych) oraz{' '}
          <b>Finanse Osobiste sp. z o.o.</b>, która prowadzi szkolenia z
          sukcesji dla branży finansowej oraz rozwija muliagencję
          ubezpieczeniową. Zadaniem tej spółki będzie dostarczenie rozwiązań
          finansowych zgodnie z moją własną filozofią pośrednictwa
          ubezpieczeniowego, o czym będę pisał sporo. Z czasem pojawią się
          kolejne spółki oraz produkty własne, np. szkolenia on-line i książki.
          <br />
          <br />
          Obiecuję, że{' '}
          <b>
            wszystkie treści sponsorowane będą zawierały informację, że to są
            treści płatne.
          </b>{' '}
          Przyjmuję prostą zasadę: jeśli w danym wpisie czy innym materiale nie
          ma mowy o partnerach czy sponsorach - jest on udostępniany za darmo,
          staraniem wyłącznie moim, moich współpracowników, a także gości, kiedy
          tacy się pojawią. Zachęcam do korzystania z usług oraz wsparcia
          wszystkich spółek-córek. Nie masz takiego obowiązku – to Twój wybór i
          Twoja odpowiedzialność, z jakiego rodzaju wsparcia merytorycznego
          będziesz chciał skorzystać.
        </Description>
      </RuleItem>

      <RuleItem>
        <Title>Swobodny ton, luźna forma wypowiedzi.</Title>
        <Description>
          Mam nadzieję, że się na to za mnie nie pogniewasz 😉 i pozwolisz, że
          blogowo przejdziemy na TY. Zrobiłem to z dwóch powodów. Po pierwsze
          będę poruszał tutaj tematy życiowo trudne, a prosty język ma ułatwić
          komunikację i rozważania o nich. Postaram się nie nadużywać fachowego
          słownictwa, choć nie sposób będzie pisać np. o zapisie windykacyjnym,
          nie posługując się tym wyrażaniem (aby ułatwić Ci życie ułożyłem mój
          <Link to="/slownik"> Subiektywny Słownik Sukcesyjny</Link>).
          <br />
          <br />
          Przy każdym wpisie znajdują się gwiazdki. Ich liczba świadczy o
          trudności tekstu:
          <br />
          <br />
          <Category>
            <StarsContainer>
              <StarImg src={star} />
            </StarsContainer>
            <CategoryDesc>
              <b>DLA POCZĄTKUJĄCYCH</b>
              <br />
              Sprawdź, czy to są tematy dla ciebie. Historie z życia wzięte.
              Teksty krótsze i bardziej przystępne.
            </CategoryDesc>
          </Category>
          <Category>
            <StarsContainer>
              <StarImg src={star} />
              <StarImg src={star} />
            </StarsContainer>
            <CategoryDesc>
              <b>DLA ZAINTERESOWANYCH</b>
              <br />
              To treści dłuższe i wymagające większej uwagi - tu także
              znajdziesz sporo przykładów. Dla wszystkich tych, którzy
              interesują się tematem i chcą pogłębiać Wielopokoleniową wiedzę.
            </CategoryDesc>
          </Category>
          <Category>
            <StarsContainer>
              <StarImg src={star} />
              <StarImg src={star} />
              <StarImg src={star} />
            </StarsContainer>
            <CategoryDesc>
              <b>DLA EKSPERTÓW</b>
              <br />
              Treści kierowane do fachowców; prawników, notariuszy, księgowych,
              doradców podatkowych. Innymi słowy: nudne i zbyt skomplikowane dla
              osoby niezwiązanej z daną branżą.
            </CategoryDesc>
          </Category>
        </Description>
        <Hand src={pointingFinger} />
      </RuleItem>

      <RuleItem>
        <Title>Szanujmy się!</Title>
        <Description>
          <b>
            Proszę Cię o kulturę wypowiedzi oraz szacunek do pozostałych
            Czytelników.
          </b>{' '}
          Przede wszystkim w komentarzach czy przy innych okazjach, kiedy
          będziesz chciał wypowiedzieć się na <i>Wielopokoleniowych</i>. Nie
          będę tolerował słów powszechnie uważanych za obelżywe albo nazbyt
          personalnych komentarzy. Wiem, że{' '}
          <b>
            żyjemy w wolnym kraju, ale każda wolność ma swoje granice. Dokładnie
            tam, gdzie zaczyna się wonność i godność osobista innych osób.
          </b>{' '}
          Dlatego - szanując własną godność osobistą oraz spokój sumienia -
          uprzedzam, że zastrzegam sobie prawo do interwencji.{' '}
          <b>
            Oczywiście krytyka, najlepiej konstruktywna i merytoryczna, zawsze
            będzie mile widziana.
          </b>{' '}
          Ale krytyka powinna być <i>ad rem</i>, a nie <i>ad personam</i>. Ma
          dotyczyć spraw, racji, poglądów, a nawet tzw. prawd podstawowych,
          jakkolwiek je rozumiemy. Ale nie ludzi i ich godności osobistej.
        </Description>
      </RuleItem>
    </RulesList>
  );
};

export default Rules;
