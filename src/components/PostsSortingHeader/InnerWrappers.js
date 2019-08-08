import styled from 'styled-components';

const InnerWrapperLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 0 0 30px;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div:first-of-type {
    width: 145px;
    margin: 0 3vw 0 0;
  }
`;

const InnerWrapperRight = styled.div`
  width: 50%;
  padding: 0 30px 0 0;
  display: flex;

  flex-direction: column;
`;
export { InnerWrapperLeft, InnerWrapperRight };
