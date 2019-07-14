import styled from 'styled-components';

import Button from '../Button/Button';

export const StyledButton = styled(Button)`
  margin: 40px 0 0 0;

  ${({ theme }) => theme.media.above.m} {
    margin: 24px 0 0 0;
    font-size: 18px;
    padding: 10px 20px;
  }
`;
