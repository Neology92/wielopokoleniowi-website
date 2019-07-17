import styled from 'styled-components';

const TileWrapper = styled.div`
  width: 165px;
  height: 190px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.grey};

  ${({ theme }) => theme.media.above.m} {
    width: 165px;
    height: 190px;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 327px;
    height: 328px;
  }

  ${({ theme }) => theme.media.above.xl} {
    width: 327px;
    height: 328px;
  }
`;

export default TileWrapper;