import styled from 'styled-components';
import { GridPostHeading } from '../Headings/Headings';

export const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 10px 8px 10px 8px;
  width: 100%;
  height: 56%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.media.above.l} {
    padding: 21px 16px 16px 16px;
    height: 50%;
  }
`;

export const StyledPostHeading = styled(GridPostHeading)`
  margin: 0 0 7px 0;
  ${({ theme }) => theme.media.above.l} {
    margin: 0 0 20px 0;
  }
`;

export const P = styled.p`
  color: rgba(${({ theme }) => theme.color.rgb.nightBlue}, 0.6);
  font-size: 1.2rem;
  line-height: 15px;
  height: 45px;
  margin: 0;
  overflow: hidden;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.6rem;
    line-height: 20px;
    height: 60px;
  }
`;
