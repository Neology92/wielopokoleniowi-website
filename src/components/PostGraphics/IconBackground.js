import styled from 'styled-components';

const IconBackground = styled.div`
  width: 100%;
  height: 354px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ category, theme }) => {
    if (category === 'Bussines') return theme.color.nightBlue;
    return theme.color.lightBlue;
  }};
`;

export default IconBackground;
