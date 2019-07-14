import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';

const Bar = styled.div`
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

export default Bar;
