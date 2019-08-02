import styled from 'styled-components';

const TileWrapper = styled.div`
  margin: auto 5px;
  ${({ theme }) => theme.media.above.l} {
    margin: 8px auto;
  }
`;

export default TileWrapper;
