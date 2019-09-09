import styled from 'styled-components';

import { SectionHeading, TextParagraph } from 'components';

export const StyledHeading = styled(SectionHeading)`
  margin: 25px 0 20px;
  ${({ theme }) => theme.media.above.m} {
    margin: 40px 0 30px;
    font-size: 3.6rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    margin: 60px 0 30px;
    font-size: 4.8rem;
  }
`;

export const StyledTextParagraph = styled(TextParagraph)`
  text-align: justify;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.6rem;
  }
`;
