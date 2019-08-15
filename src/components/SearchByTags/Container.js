import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
  width: 100%;

  position: relative;

  & > .active {
    background: rgb(${({ theme }) => theme.color.rgb.white}, 0.6);
    color: rgb(${({ theme }) => theme.color.rgb.nightBlue}, 1);
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 10px 0;
  }
`;

export default Container;
