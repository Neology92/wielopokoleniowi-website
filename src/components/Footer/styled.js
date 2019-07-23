import styled from 'styled-components';
import Img from 'gatsby-image';

import Button from '../Button/Button';

export const StyledButton = styled(Button)`
  margin: 40px 0 0 0 !important;

  text-decoration: none !important;

  font-size: 14px !important;
  font-weight: 500 !important;

  ${({ theme }) => theme.media.above.l} {
    margin: 24px 0 0 0 !important;
    font-size: 18px !important;
  }
`;

// TODO: Make better way to fit image...
export const StyledImg = styled(Img)`
  margin: 25px 0 0;
  picture {
    width: 170px;
    height: 79px;
    position: relative;
    margin: 0 12px;
  }
  picture img {
    width: 170px !important;
    height: 79px !important;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 35px 0 0;
    picture {
      margin: 0 0;
    }
    picture img {
      width: 194px !important;
      height: 90px !important;
    }
  }
`;
