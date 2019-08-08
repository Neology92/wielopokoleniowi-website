import styled from 'styled-components';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-size: 4.8rem;
  color: white;
  font-family: ${({ theme }) => theme.font.family.atma};
  font-weight: 500;
  padding-bottom: 10px;
`;

const StyledIcon = styled(Icon)`
  height: 100%;
  margin: 0 0 -2px;
`;

const StyledButton = styled(Button)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.atma};
  font-size: 1.8rem;
  font-weight: 500;

  padding: 5px 20px;
  margin: 0 0 0 -5px;

  border-radius: 50px;
  background: rgb(${({ theme }) => theme.color.rgb.white}, 0.1);
`;

export { StyledH2, StyledIcon, StyledButton };
