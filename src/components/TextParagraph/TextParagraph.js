import styled from 'styled-components';

const TextParagraph = styled.p`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.font.family.roboto};
  line-height: 150%;
  opacity: 80%;
  margin: 6px 0 0;

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.8rem;
  }
`;
export default TextParagraph;
