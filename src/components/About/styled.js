import styled from 'styled-components';

import Button from '../Button/Button';
import TextParagraph from '../TextParagraph/TextParagraph';
import LukasPortret from '../Icon/LukasPortret';

export const StyledButton = styled(Button)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 64px;
  text-align: center;
  margin: 15px auto 0;
`;

export const StyledTextParagraph = styled(TextParagraph)`
  text-align: center;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.45rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 1.6rem;
  }
`;

export const StyledLukasPortret = styled(LukasPortret)`
  margin-bottom: -3px;
`;
