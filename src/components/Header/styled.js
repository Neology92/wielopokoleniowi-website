import styled from 'styled-components';

import Logo from './Logo';
import MobileMenu from '../MobileMenu/MobileMenu';

export const StyledLogo = styled(Logo)`
  width: 141px;

  ${({ theme }) => theme.media.above.m} {
    width: 252px;
  }
`;

export const StyledMobileMenu = styled(MobileMenu)`
  top: 83px;
  right: 0;
  height: calc(100vh - 83px);
`;
