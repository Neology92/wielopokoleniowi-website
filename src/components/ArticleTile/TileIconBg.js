import styled from 'styled-components';

const TileIconBg = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;

  background: ${({ category, theme }) => {
    if (category === 'Bussines') return theme.color.nightBlue;
    return theme.color.lightBlue;
  }};
`;

export default TileIconBg;
