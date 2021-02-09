import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { CategoryTile, Bussines, Everyone } from 'components';

const FirstStepsSection = () => {
  return (
    <SectionWrapper>
      <CategoryTile>
        <StyledLink to="/artykuly/dla-kazdego">
          {' '}
          {/* /pierwsze-kroki */}
          <StyledEveryone /> DLA KAŻDEGO
        </StyledLink>
      </CategoryTile>
      <CategoryTile isDark>
        <StyledLink to="/artykuly/dla-biznesu">
          {' '}
          {/* /pierwsze-kroki */}
          <StyledBussines /> DLA BIZNESU
        </StyledLink>
      </CategoryTile>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  text-align: center;

  width: 100%;
  height: 80px;

  margin-top: 30px;

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
    height: 263px;
    margin: 0;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.white};

  font-size: 1.6rem;
  padding: 30px;

  ${({ theme }) => theme.media.above.s} {
    font-size: 2rem;
    padding: 30px;
  }

  ${({ theme }) => theme.media.above.m} {
    font-size: 2.8rem;
    padding: 30px;
  }
  ${({ theme }) => theme.media.above.l} {
    font-size: 3.2rem;
    padding: 30px;
  }
  ${({ theme }) => theme.media.above.xl} {
    font-size: 3.6rem;
    padding: 30px;
  }
`;

const StyledBussines = styled(Bussines)`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    display: block;

    margin: 30px;
    width: 100px;

    ${({ theme }) => theme.media.above.l} {
      width: 120px;
    }

    ${({ theme }) => theme.media.above.xl} {
      width: inherit;
    }
  }
`;

const StyledEveryone = styled(Everyone)`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    display: block;

    margin: 30px;
    width: 100px;

    ${({ theme }) => theme.media.above.l} {
      width: 120px;
    }
    ${({ theme }) => theme.media.above.xl} {
      width: inherit;
    }
  }
`;

export default FirstStepsSection;
