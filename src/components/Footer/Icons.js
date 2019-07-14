import styled from 'styled-components';

import Facebook from '../Icon/Facebook';
import Youtube from '../Icon/Youtube';
import Telephone from '../Icon/Telephone';
import Mail from '../Icon/Mail';
import Web from '../Icon/Web';
import Pages from '../Icon/Pages';

export const StyledFacebook = styled(Facebook)`
  height: 28px;
  padding: 15px 8px 15px 15px;
`;

export const StyledYoutube = styled(Youtube)`
  height: 24px;
  padding: 15px 15px 15px 8px;
`;

export const StyledTelephone = styled(Telephone)`
  height: 16px;
  margin: 14px 0 0;

  ${({ theme }) => theme.media.above.m} {
    height: 21px;
    margin: 46px 0 0;
  }
`;

export const StyledMail = styled(Mail)`
  height: 12px;
  margin: 16px 0 0;

  ${({ theme }) => theme.media.above.m} {
    height: 16px;
    margin: 24px 0 0;
  }
`;

export const StyledWeb = styled(Web)`
  height: 16px;
  margin: 24px 0 0;

  ${({ theme }) => theme.media.above.m} {
    height: 20px;
    margin: 64px 0 0;
  }
`;

export const StyledPages = styled(Pages)`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    display: inherit;
    height: 103px;
    margin: 23px 0 0;
  }
`;
