import styled from 'styled-components';

const PostsGridWrapper = styled.div`
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 165px);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px 10px;
  justify-content: center;

  ${({ theme }) => theme.media.above.s} {
    grid-gap: 30px 36px;
  }

  ${({ theme }) => theme.media.above.m} {
    grid-template-columns: repeat(3, 165px);
    grid-template-rows: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 70px auto 0;
    grid-template-columns: repeat(2, 327px);
    grid-template-rows: repeat(3, 1fr);
  }

  ${({ theme }) => theme.media.above.xl} {
    grid-template-columns: repeat(3, 327px);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export default PostsGridWrapper;
