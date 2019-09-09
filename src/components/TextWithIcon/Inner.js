import styled from 'styled-components';

const Inner = styled.div`
  color: ${({ theme, isBlue }) =>
    isBlue ? theme.color.darkBlue : theme.color.black};

  > h3 {
    margin: 10px 0;
    font-family: ${({ theme }) => theme.font.family.roboto};
    font-weight: 500;
    font-size: 1.6rem;
  }

  p span {
    color: ${({ theme }) => theme.color.black};
  }

  ul {
    padding: 0 0 0 15px;
    li {
      padding: 0 0 0 5px;
    }
  }

  ${({ theme }) => theme.media.above.m} {
    > h3 {
      margin: 15px 0;
      font-size: 2rem;
    }
  }
  ${({ theme }) => theme.media.above.l} {
    margin: 80px 0 40px;

    ul {
      padding: 0 0 0 15px;
      li {
        padding: 0 0 0 15px;
      }
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Inner;
