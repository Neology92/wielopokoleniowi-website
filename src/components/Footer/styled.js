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
  background-color: ${({ color, theme }) =>
    color == 'dark' ? theme.color.darkGrey : theme.color.grey};
`;

export const Bar = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  text-align: center;

  &,
  & a {
    color: rgba(255, 255, 255, 0.6);
    font-family: ${({ theme }) => theme.font.family.roboto};
    font-size: 10px;
    line-height: 12px;
    text-decoration: none;
  }

  & a:active {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  & > div {
    height: 28px;
    width: 78px;
    margin: 15px auto 5px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  & p {
    margin-bottom: 0px;
  }

  & p:nth-child(3n) {
    margin-top: 2px;
  }
`;
