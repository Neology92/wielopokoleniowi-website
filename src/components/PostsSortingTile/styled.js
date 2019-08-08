import styled from 'styled-components';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const StyledH2 = styled.h2`
  font-size: 4.8rem;
  color: white;
  font-family: ${({ theme }) => theme.font.family.atma};
  font-weight: 500;
`;

const StyledIcon = styled(Icon)`
  width: 130px;
  height: 100px;
`;

const StyledButton = styled(Button)``;

export { StyledH2, StyledIcon, StyledButton };
