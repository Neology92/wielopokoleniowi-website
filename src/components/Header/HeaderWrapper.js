import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 84px;
  background-image: url(${bgImage});
  background-size: cover;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  ${({ theme }) => theme.media.above.m} {
    height: 160px;
    position: static;
  }
`;

export default HeaderWrapper;
