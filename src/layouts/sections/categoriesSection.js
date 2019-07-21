import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { CategoryTile, Bussines, Everyone } from 'components';

const CategoriesSection = () => {
  return (
    <SectionWrapper>
      <CategoryTile isDark>
        <StyledLink to="/artykuly/dla-biznesu">
          <StyledBussines /> DLA BIZNESU
        </StyledLink>
      </CategoryTile>
      <CategoryTile>
        <StyledLink to="/artykuly/dla-kazdego">
          <StyledEveryone /> DLA KAŻDEGO
        </StyledLink>
      </CategoryTile>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
    height: 263px;
    margin: 0;
    text-align: center;

    display: flex;
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: 3.6rem;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.white};
  padding: 30px;
`;

const StyledBussines = styled(Bussines)`
  margin: 30px;
`;

const StyledEveryone = styled(Everyone)`
  margin: 30px;
`;

export default CategoriesSection;
