import styled from 'styled-components';

const MenuLinksWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0.2')};
  transition: opacity 0.3s 0.1s ease-in-out;

  li:nth-child(${({ path }) => {
        if (path === '/o-autorze') return 1;
        if (path === '/artykuly') return 2;
        if (path === '/artykuly/dla-kazdego') return 2;
        if (path === '/artykuly/dla-biznesu') return 2;
        if (path === '/slownik') return 3;
        return 0;
      }}) {
    div {
      font-weight: 500;
      color: ${({ theme }) => theme.color.darkBlue};
    }
  }
`;

export default MenuLinksWrapper;
