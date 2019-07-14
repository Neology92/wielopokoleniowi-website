import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 684px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 3fr 3fr 2fr;

  ${({ theme }) => theme.media.above.l} {
    height: 428px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 7fr 2fr;
  }
`;

export default FooterWrapper;
