import styled from 'styled-components';

export const ArticleMainHeading = styled('h2')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 2.4rem;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.8rem;
  }
`;
export const ArticleInsideHeading = styled('h3')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 1.2rem;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.6rem;
  }
`;
export const SidebarHeading = styled('h4')`
  font-family: ${({ theme }) => theme.font.family.atma};
  font-size: 2.4rem;
`;
export const SidebarArticleTitle = styled('h5')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 1.4rem;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.8rem;
  }
`;

export const SectionHeading = styled('h2')`
  margin: 0;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.atma};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.darkBlue};

  ${({ theme }) => theme.media.above.l} {
    font-size: 3.6rem;
  }
`;
export const CategoryHeading = styled('h3')`
  font-family: ${({ theme }) => theme.font.family.atma};
  font-size: 1.6rem;

  ${({ theme }) => theme.media.above.l} {
    display: none;
  }
`;
export const GridArticleHeading = styled('h4')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 1.4rem;

  ${({ theme }) => theme.media.above.l} {
    font-size: 2.1rem;
  }
`;
export const SectionSecondHeading = styled('h5')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 0.1rem;
`;
