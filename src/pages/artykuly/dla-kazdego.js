import React from 'react';
import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO, Menu, Breadcrumbs } from 'components';

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

const Everyone = () => (
  <MainLayout>
    <SEO title="Dla Każdego" />
    <Menu />
    <StyledContainer>
      <BreadcrumbsWrapper>
        <Breadcrumbs category="Everyone" />
      </BreadcrumbsWrapper>
      <h1>Artykuły</h1>
      <h2>Dla Każdego</h2>
    </StyledContainer>
  </MainLayout>
);

export default Everyone;
