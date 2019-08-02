import styled from 'styled-components';

const RecommendedWrapper = styled.div`
  width: 100%;
  margin: 10px 0;

  ${({ theme }) => theme.media.above.l} {
    margin: 70px 0;
  }
`;

export default RecommendedWrapper;
