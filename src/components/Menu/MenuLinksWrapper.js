import styled from 'styled-components';

const MenuLinksWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

export default MenuLinksWrapper;
