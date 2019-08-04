import styled from 'styled-components';

const MenuLinksWrapper = styled.ul`
  padding: 0;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default MenuLinksWrapper;
