import styled from 'styled-components';

import { lazyLoad } from 'assets/styles/keyframes';

export const AboutWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    width: 100%;
    height: 442px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  animation: ${lazyLoad} 0.8s ease-in-out;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-top: 3px solid ${({ theme }) => theme.color.lightBlue};
  border-bottom: 3px solid ${({ theme }) => theme.color.lightBlue};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
