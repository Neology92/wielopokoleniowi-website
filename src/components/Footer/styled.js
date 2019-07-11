import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';

export const FooterWrap = styled.footer`
  width: 100vw;
  height: 684px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 3fr 3fr 2fr;

  ${({ theme }) => theme.media.above.m} {
    height: 428px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 7fr 2fr;
  }
`;

export const Block = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightgrey;
  border: 1px white solid;
`;

export const Bar = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
`;
