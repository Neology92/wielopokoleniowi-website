import styled from 'styled-components';

const TileWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.media.above.m} {
    display: flex;
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
