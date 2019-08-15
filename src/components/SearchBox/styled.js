import styled from 'styled-components';

import Icon from '../Icon/Icon';

const StyledInput = styled.input`
  width: 79%;
  padding: 10px 50px 10px 20px;
  border: none;
  background: rgb(${({ theme }) => theme.color.rgb.white}, 0.1);
  border-radius: 50px;

  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 400;
  font-size: 1.8rem;

  &::placeholder {
    color: rgb(${({ theme }) => theme.color.rgb.white}, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0px -50px 0px -49px ${({ theme }) => theme.color.white} inset;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 83%;
  }
`;

const StyledIcon = styled(Icon)`
  width: 20px;

  position: absolute;
  top: 10px;
  right: 20px;
`;

export { StyledIcon, StyledInput };
