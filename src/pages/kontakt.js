import React from 'react';
import styled from 'styled-components';

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

const Kontakt = () => (
  <MainLayout>
    <SEO title="Kontakt" />
    <StyledContainer>
      <h1>Kontakt</h1>
    </StyledContainer>
  </MainLayout>
);

export default Kontakt;
