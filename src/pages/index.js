import React from 'react';
import styled from 'styled-components';

import { MainLayout, WelcomeSection } from 'layouts';
import { SEO, Menu } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 1500px;
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <StyledContainer>
      <Menu />
      <WelcomeSection />
    </StyledContainer>
  </MainLayout>
);

export default IndexPage;
