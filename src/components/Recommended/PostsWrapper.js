import styled from 'styled-components';

const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;

  ${({ theme }) => theme.media.above.l} {
    margin: 0;
    flex-direction: column;
  }
`;

export default PostsWrapper;
