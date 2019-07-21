import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  margin: 0 8px;
  width: calc(100% - 16px);
  height: 100%;
  text-align: left;

  p {
    color: rgba(${({ theme }) => theme.color.rgb.nightBlue}, 0.6);
    font-size: 1.2rem;
  }
  ${({ theme }) => theme.media.above.l} {
    margin: 0 17px;
    p {
      font-size: 1.6rem;
    }
  }
`;

export default DescriptionWrapper;
