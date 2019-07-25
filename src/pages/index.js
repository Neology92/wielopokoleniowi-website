import React from 'react';
import styled from 'styled-components';

import {
  MainLayout,
  WelcomeSection,
  PostsSection,
  CategoriesSection,
  AboutSection,
} from 'layouts';
import { SEO } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0 10vw 0;
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <StyledContainer>
      <WelcomeSection />
      <CategoriesSection />
      <PostsSection />
      <AboutSection />
    </StyledContainer>
  </MainLayout>
);

export default IndexPage;
