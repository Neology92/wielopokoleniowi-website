import styled from 'styled-components';

const TileIconBg = styled.div`
  width: 100%;
  height: 44%;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ category, theme }) => {
    if (category === 'Bussines') return theme.color.nightBlue;
    return theme.color.lightBlue;
  }};

  ${({ theme }) => theme.media.above.l} {
    height: 50%;
  }
`;

export default TileIconBg;
