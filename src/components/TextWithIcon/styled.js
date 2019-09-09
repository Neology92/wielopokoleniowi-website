import styled from 'styled-components';

import Icon from '../Icon/Icon';

export const StyledIcon = styled(Icon)`
  box-sizing: border-box;
  padding: 40px;

  ${({ theme }) => theme.media.above.m} {
    margin: ${({ isRight }) =>
      isRight ? `40px 40px 40px 80px` : `40px 80px 40px 40px`};

    padding: 0;
    svg {
      width: 100%;
    }
  }
`;
