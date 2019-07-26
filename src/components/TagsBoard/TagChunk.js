import styled from 'styled-components';

const TagChunk = styled.div`
  height: 20px;
  padding: 5px 10px;
  margin: 5px;
  background: ${({ theme }) => theme.color.lightBlue};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 400;
`;

export default TagChunk;
