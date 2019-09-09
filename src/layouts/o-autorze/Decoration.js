import styled from 'styled-components';

import { Icon } from 'components';

const Decoration = styled(Icon)`
  position: absolute;
  display: none;

  ${({ theme }) => theme.media.above.m} {
    display: block;

    ${({ isTop, top, bottom }) =>
      isTop ? `top: ${top};` : `bottom: ${bottom};`};

    ${({ isLeft, left, right }) =>
      isLeft ? `left: ${left};` : `right: ${right};`};
  }

  z-index: -1;
`;

export default Decoration;
