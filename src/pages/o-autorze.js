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
    margin: 0 auto;
  }
`;

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;

const About = () => (
  <MainLayout>
    <SEO title="O autorze" />
    <BreadcrumbsWrapper>
      <Breadcrumbs page="O autorze" />
    </BreadcrumbsWrapper>
    <StyledContainer>
      <h1>O autorze</h1>
    </StyledContainer>
  </MainLayout>
);

export default About;
