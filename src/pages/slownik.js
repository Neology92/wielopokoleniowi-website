import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 0 10vw 0;
  display: flex;
  flex-direction: column;
  justify-content: fles-start;

  h1 {
    font-size: 4rem;
    margin: 0 auto;
  }
`;

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;
const Slownik = ({ location: { pathname } }) => (
  <MainLayout path={pathname}>
    <SEO title="Slownik" />
    <BreadcrumbsWrapper>
      <Breadcrumbs path={pathname} />
    </BreadcrumbsWrapper>
    <StyledContainer>
      <h1>Slownik</h1>
    </StyledContainer>
  </MainLayout>
);

Slownik.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default Slownik;
