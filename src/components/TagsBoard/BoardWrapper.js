import styled from 'styled-components';

const TagsWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    display: inherit;
    margin: 40px 0;
    width: 100%;
  }
`;

export default TagsWrapper;
