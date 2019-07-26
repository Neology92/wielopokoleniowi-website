import styled from 'styled-components';

const PostsWrapper = styled.div`
  width: 100%;
  margin: 10px;

  ${({ theme }) => theme.media.above.l} {
    margin: 10px 0;
  }
`;

export default PostsWrapper;
