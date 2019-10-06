import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs, FirstStepsHeader } from 'components';

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
  padding: 15px 0 0 15px;
  width: 100%;
`;

const EveryoneFirstSteps = ({ location: { pathname } }) => (
  <MainLayout path={pathname}>
    <SEO title="Dla Każdego" />
    <StyledContainer>
      <BreadcrumbsWrapper>
        <Breadcrumbs path={pathname} />
      </BreadcrumbsWrapper>
      <FirstStepsHeader path={pathname} />
      {/* <PostsGrid posts={} /> */}
    </StyledContainer>
  </MainLayout>
);

EveryoneFirstSteps.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};
export default EveryoneFirstSteps;
