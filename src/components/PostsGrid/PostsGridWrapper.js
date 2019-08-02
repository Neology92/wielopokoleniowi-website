import styled from 'styled-components';

const PostsGridWrapper = styled.div`
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 165px);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px 10px;
  justify-content: center;

  & a:nth-child(1) {
    order: 2;
  }
  & a:nth-child(2) {
    order: 4;
  }
  & a:nth-child(3) {
    order: 65;
  }
  & a:nth-child(4) {
    order: 1;
  }
  & a:nth-child(5) {
    order: 3;
  }
  & a:nth-child(6) {
    order: 5;
  }

  ${({ theme }) => theme.media.above.s} {
    grid-template-columns: repeat(2, 165px);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 30px 36px;
  }

  ${({ theme }) => theme.media.above.m} {
    grid-template-columns: repeat(3, 165px);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px 36px;

    & a:nth-child(1) {
      order: 1;
    }
    & a:nth-child(2) {
      order: 3;
    }
    & a:nth-child(3) {
      order: 5;
    }
    & a:nth-child(4) {
      order: 2;
    }
    & a:nth-child(5) {
      order: 4;
    }
    & a:nth-child(6) {
      order: 6;
    }
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 70px auto 0;
    grid-template-columns: repeat(2, 327px);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 30px 36px;

    & a:nth-child(1) {
      order: 2;
    }
    & a:nth-child(2) {
      order: 4;
    }
    & a:nth-child(3) {
      order: 65;
    }
    & a:nth-child(4) {
      order: 1;
    }
    & a:nth-child(5) {
      order: 3;
    }
    & a:nth-child(6) {
      order: 5;
    }
  }

  ${({ theme }) => theme.media.above.xl} {
    grid-template-columns: repeat(3, 327px);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px 36px;

    & a:nth-child(1) {
      order: 1;
    }
    & a:nth-child(2) {
      order: 3;
    }
    & a:nth-child(3) {
      order: 5;
    }
    & a:nth-child(4) {
      order: 2;
    }
    & a:nth-child(5) {
      order: 4;
    }
    & a:nth-child(6) {
      order: 6;
    }
  }
`;

export default PostsGridWrapper;
