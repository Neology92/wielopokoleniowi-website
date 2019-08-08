import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  MainLayout,
  WelcomeSection,
  FirstStepsSection,
  PostsSection,
  AboutSection,
} from 'layouts';
import { SEO } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;

  ${({ theme }) => theme.media.above.m} {
    margin: 0 0 10vw 0;
  }
`;

const IndexPage = ({ location: { pathname } }) => (
  <MainLayout path={pathname} isMainPage>
    <SEO title="Home" />
    <StyledContainer>
      <WelcomeSection />
      <FirstStepsSection />
      <PostsSection />
      <AboutSection />
    </StyledContainer>
  </MainLayout>
);

IndexPage.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default IndexPage;
