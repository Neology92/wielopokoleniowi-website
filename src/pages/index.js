import React from 'react';
import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 1500px;
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <StyledContainer />
  </MainLayout>
);

export default IndexPage;
