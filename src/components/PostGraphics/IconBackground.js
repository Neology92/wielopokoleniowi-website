import styled from 'styled-components';

const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;

  background: ${({ category, theme }) => {
    if (category === 'Bussines') return theme.color.nightBlue;
    return theme.color.lightBlue;
  }};

  border-radius: 10px;
  width: calc(100% - 160px);

  height: calc(52vw - 100px);

  ${({ theme }) => theme.media.above.s} {
    height: 150px;
  }

  ${({ theme }) => theme.media.above.m} {
    height: 194px;
  }
`;

export default IconBackground;
