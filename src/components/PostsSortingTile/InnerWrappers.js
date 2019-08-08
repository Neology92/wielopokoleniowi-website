import styled from 'styled-components';

const InnerWrapperLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 30px;
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const InnerWrapperRight = styled.div`
  width: 50%;
  padding: 0 30px;
  display: flex;

  flex-direction: column;
`;
export { InnerWrapperLeft, InnerWrapperRight };
