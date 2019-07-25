import styled from 'styled-components';

export const PostMainHeading = styled('h2')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 0.8);
  font-size: 1.8rem;
  line-height: 130%;

  ${({ theme }) => theme.media.above.l} {
    font-size: 2.4rem;
    margin: 10px 0 30px;
  }
`;
export const PostInsideHeading = styled('h3')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 1.2rem;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.6rem;
  }
`;
export const SidebarHeading = styled('h4')`
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.darkBlue};
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
  margin: 15px auto;
`;

export const SidebarPostTitle = styled('h5')`
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

  ${({ theme }) => theme.media.above.m} {
    font-size: 3rem;
  }

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
export const GridPostHeading = styled('h4')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  font-size: 1.4rem;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.8rem;
  }
`;
export const SectionSecondHeading = styled('h5')`
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 0.1rem;
`;
