import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs, PostsSortingHeader } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  min-height: 80vh;
`;

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;

const BussinesPosts = ({ location: { pathname } }) => (
  <MainLayout path={pathname}>
    <SEO title="Dla Biznesu" />
    <StyledContainer>
      <BreadcrumbsWrapper>
        <Breadcrumbs path={pathname} />
      </BreadcrumbsWrapper>
      <PostsSortingHeader path={pathname} />
    </StyledContainer>
  </MainLayout>
);

BussinesPosts.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default BussinesPosts;
