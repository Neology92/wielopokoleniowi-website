import styled from 'styled-components';

const Button = styled.button`
  height: 33px;
  padding: 10px 14px;

  background: ${({ isTransparent, theme }) =>
    isTransparent ? 'none' : theme.color.lightBlue};

  border: ${({ isTransparent, theme }) =>
    isTransparent ? `1px solid ${theme.color.darkBlue}` : 'none'};
  border-radius: 10px;

  color: ${({ isTransparent, theme }) =>
    isTransparent ? theme.color.darkBlue : theme.color.white};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  font-size: ${({ isBig }) => (isBig ? '18px' : '14px')};
  line-height: 50%;
`;

export default Button;
