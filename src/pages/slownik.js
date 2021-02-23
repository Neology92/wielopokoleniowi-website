import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import thumbUp from 'assets/images/thumbUp.svg';
import blot1 from 'assets/images/blot1.svg';
import blot2 from 'assets/images/blot2.svg';
import blot3 from 'assets/images/blot3.svg';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs, Definition } from 'components';
import { StyledHeading, StyledContainer } from '../layouts/shared/styled';
import Decoration from '../layouts/o-autorze/Decoration';

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;
const Slownik = ({
  location: { pathname, origin },
  data: {
    graphcms: { dictionaries },
  },
}) => (
  <MainLayout path={pathname}>
    <SEO title="Slownik" origin={origin} />
    <BreadcrumbsWrapper>
      <Breadcrumbs path={pathname} />
    </BreadcrumbsWrapper>
    <StyledContainer>
      <Decoration src={blot1} left="-300px" top="150px" isTop isLeft />
      <Decoration src={blot2} right="-400px" top="800px" isTop />
      <Decoration src={blot3} left="-240px" top="1500px" isTop isLeft />
      <Decoration src={thumbUp} right="-10px" top="60px" isTop />
      <StyledHeading>Wszystkie trudne słówka</StyledHeading>
      {dictionaries.map(({ word, definition }) => (
        <Definition key={word} word={word} definition={definition} />
      ))}
    </StyledContainer>
  </MainLayout>
);

export const dictionaryQuery = graphql`
  query {
    graphcms {
      dictionaries {
        word
        definition
      }
    }
  }
`;

Slownik.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
  data: PropTypes.shape({
    graphcms: PropTypes.shape({
      dictionaries: PropTypes.arrayOf(
        PropTypes.shape({
          word: PropTypes.string,
          definition: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

export default Slownik;
