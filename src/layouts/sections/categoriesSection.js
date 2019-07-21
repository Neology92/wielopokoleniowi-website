import React from 'react';
import styled from 'styled-components';

import { CategoryTile } from 'components';

const SectionWrapper = styled.section`
  width: 100%;
  height: 263px;
  margin: 0;
  text-align: center;

  display: flex;
  flex-direction: row;
`;

const CategoriesSection = () => {
  return (
    <SectionWrapper>
      <CategoryTile isDark />
      <CategoryTile />
    </SectionWrapper>
  );
};

export default CategoriesSection;
