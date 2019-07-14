import styled from 'styled-components';
import Img from 'gatsby-image';

import Button from '../Button/Button';

export const StyledButton = styled(Button)`
  margin: 40px 0 0 0;

  ${({ theme }) => theme.media.above.m} {
    margin: 24px 0 0 0;
    font-size: 18px;
    padding: 10px 20px;
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
