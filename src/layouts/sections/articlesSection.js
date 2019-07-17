import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from 'components';

const SectionWrapper = styled.section`
  margin: 30px 10px 0;
  text-align: center;
`;

const ArticlesSection = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Najnowsze artykuły</SectionHeading>
    </SectionWrapper>
  );
};

export default ArticlesSection;
