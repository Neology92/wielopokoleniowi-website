import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';

const Bar = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 58px 37px 29px;

  section > div {
    height: 28px;
    width: 78px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin: 15px auto 0 auto;
  }

  &,
  a {
    color: rgba(255, 255, 255, 0.6);
    font-family: ${({ theme }) => theme.font.family.roboto};
    font-size: 1rem;
    line-height: 12px;
    text-decoration: none;
  }

  a:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  p {
    margin: 1px 0;
  }

  ${({ theme }) => theme.media.above.l} {
    grid-column-start: 1;
    grid-column-end: 4;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    &,
    & a {
      font-size: 1.4rem;
      line-height: 14px;
    }

    p {
      margin: 7px 0;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & section:nth-child(2) {
      order: -1;
    }
  }
`;

export default Bar;
