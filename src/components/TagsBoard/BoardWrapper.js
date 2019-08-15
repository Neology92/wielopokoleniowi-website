import styled from 'styled-components';

const BoardWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    margin: 40px 0;
    width: 100%;
  }
`;

export default BoardWrapper;
