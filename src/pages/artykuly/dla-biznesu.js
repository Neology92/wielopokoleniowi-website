import React from 'react';
import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 0 10vw 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-size: 4rem;
  }

  h1,
  h2 {
    margin: 0 auto;
  }
`;

const BreadcrumbsWrapper = styled.div`
  margin: 100px auto;
  width: 700px;
`;

const Bussines = () => (
  <MainLayout>
    <SEO title="Dla Biznesu" />
    <StyledContainer>
      <BreadcrumbsWrapper>
        <Breadcrumbs category="Bussines" />
      </BreadcrumbsWrapper>
      <h1>Artykuły</h1>
      <h2>Dla Biznesu</h2>
    </StyledContainer>
  </MainLayout>
);

export default Bussines;
