import styled from 'styled-components';

const Block = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${({ isDark, theme }) =>
    isDark ? theme.color.darkGrey : theme.color.grey};
  box-shadow: ${({ shadow, theme }) => {
    if (shadow == 'strong') return theme.shadow.inside.strong;
    else if (shadow == 'medium') return theme.shadow.inside.medium;
    else return theme.shadow.inside.none;
  }};

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.family.atma};
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBlue};
    text-align: center;
    margin: 22px 0 0;
  }

  a {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.family.roboto};
    font-weight: 400;
    color: ${({ theme }) => theme.color.darkBlue};
    text-decoration: underline;

    margin: 8px 0 0;
  }

  ${({ theme }) => theme.media.above.m} {
    box-shadow: ${({ theme }) => theme.shadow.inside.strong};

    h1 {
      margin: 66px 0 0;
      font-size: 24px;
    }

    a {
      font-size: 18px;
    }
  }
`;

export default Block;
