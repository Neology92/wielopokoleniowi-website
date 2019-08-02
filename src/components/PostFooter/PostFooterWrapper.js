import styled from 'styled-components';

const PostFooterWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.above.l} {
    margin: 50px auto 0;
  }
`;

export default PostFooterWrapper;
