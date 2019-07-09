import React from 'react';
import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO } from 'components';

const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.roboto};
`;

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Wielopokoleniowi</h1>
    <StyledParagraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, vel
      nihil mollitia voluptas autem pariatur tempore non, similique facere
      voluptatem est. Dolorum placeat minus tempore? Accusamus eos laborum quis
      voluptate.
    </StyledParagraph>
  </MainLayout>
);

export default IndexPage;
