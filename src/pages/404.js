import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 0 10vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0 auto;
  }
`;

const PageNotFound = ({ location: { pathname, origin } }) => (
  <MainLayout path={pathname}>
    <SEO title="404 - Nie znaleziono" origin={origin} />
    <StyledContainer>
      <h1>404</h1>
      <h1>Page not found</h1>
    </StyledContainer>
  </MainLayout>
);

PageNotFound.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default PageNotFound;
