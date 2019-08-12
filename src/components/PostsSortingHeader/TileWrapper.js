import styled from 'styled-components';

const TileWrapper = styled.header`
  display: none;
  ${({ theme }) => theme.media.above.l} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 233px;
    margin: 20px 0;
    border-radius: 10px;
    background: ${({ category, theme }) =>
      category === '/artykuly/dla-biznesu'
        ? theme.color.nightBlue
        : theme.color.lightBlue};
  }
`;

export default TileWrapper;
