import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';
import Facebook from '../Icon/Facebook';
import Youtube from '../Icon/Youtube';
import Telephone from '../Icon/Telephone';
import Mail from '../Icon/Mail';
import Web from '../Icon/Web';
import Pages from '../Icon/Pages';
import Button from '../Button/Button';

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

export const StyledButton = styled(Button)`
  margin: 40px 0 0 0;

  ${({ theme }) => theme.media.above.m} {
    margin: 24px 0 0 0;
    font-size: 18px;
    padding: 10px 20px;
  }
`;

export const FooterWrap = styled.footer`
  width: 100%;
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

export const Block = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${({ isDark, theme }) =>
    isDark ? theme.color.darkGrey : theme.color.grey};
  box-shadow: ${({ shadow, theme }) => {
    if (shadow == 'strong') return theme.shadow.inside.strong;
    else if (shadow == 'medium') return theme.shadow.inside.medium;
    else return theme.shadow.inside.none;
  }};

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.family.atma};
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBlue};
    text-align: center;
    margin: 22px 0 0;
  }

  a {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.family.roboto};
    font-weight: 400;
    color: ${({ theme }) => theme.color.darkBlue};
    text-decoration: underline;

    margin: 8px 0 0;
  }

  ${({ theme }) => theme.media.above.m} {
    box-shadow: ${({ theme }) => theme.shadow.inside.strong};

    h1 {
      margin: 66px 0 0;
      font-size: 24px;
    }

    a {
      font-size: 18px;
    }
  }
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
    font-size: 1rem;
    line-height: 12px;
    text-decoration: none;
  }

  & a:hover {
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

  ${({ theme }) => theme.media.above.m} {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;
