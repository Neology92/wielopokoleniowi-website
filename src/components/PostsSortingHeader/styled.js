import styled from 'styled-components';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.atma};
  font-weight: 500;
  color: white;
  font-size: 2.4rem;

  margin: 0;

  ${({ theme }) => theme.media.above.l} {
    font-size: 4.8rem;
    padding-bottom: 15px;
    margin: 0;
  }
`;

const StyledIcon = styled(Icon)`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    display: inherit;

    height: 100%;
    margin: 0 0 -2px;
  }
`;

const StyledButton = styled(Button)`
  font-family: ${({ theme }) => theme.font.family.atma};
  font-size: 1.4rem;
  font-weight: 500;

  border-radius: 50px;
  background: rgb(${({ theme }) => theme.color.rgb.white}, 0.1);
  padding: 3px 15px;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.8rem;

    display: flex;
    flex-direction: row;

    & svg:first-child {
      padding: 11px 3px;
      height: 12px;
    }
  }
`;

export { StyledH2, StyledIcon, StyledButton };
