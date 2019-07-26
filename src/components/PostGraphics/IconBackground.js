import styled from 'styled-components';

const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ category, theme }) => {
    if (category === 'Bussines') return theme.color.nightBlue;
    return theme.color.lightBlue;
  }};

  border-radius: 10px;
  width: 100%;

  height: 52vw;

  ${({ theme }) => theme.media.above.s} {
    height: 270px;
  }

  ${({ theme }) => theme.media.above.m} {
    height: 354px;
  }
`;

export default IconBackground;
