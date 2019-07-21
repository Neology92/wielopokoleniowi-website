import React from 'react';
import styled from 'styled-components';

import {
  MainLayout,
  WelcomeSection,
  PostsSection,
  CategoriesSection,
} from 'layouts';
import { SEO, Menu } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0 10vw 0;
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <StyledContainer>
      <Menu />
      <WelcomeSection />
      <CategoriesSection />
      <PostsSection />
    </StyledContainer>
  </MainLayout>
);

export default IndexPage;
