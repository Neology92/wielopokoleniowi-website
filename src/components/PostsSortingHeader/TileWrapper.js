import styled from 'styled-components';

const TileWrapper = styled.header`
  width: 92%;
  height: 259px;
  margin: 20px auto;

  border-radius: 10px;
  background: ${({ category, theme }) =>
    category === '/artykuly/dla-biznesu'
      ? theme.color.nightBlue
      : theme.color.lightBlue};

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
  }
  ${({ theme }) => theme.media.above.l} {
    height: 233px;
    flex-direction: row;
  }
`;

export default TileWrapper;
