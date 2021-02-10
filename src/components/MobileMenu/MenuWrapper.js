import styled from 'styled-components';

const MenuWrapper = styled.nav`
  width: 160px;
  position: absolute;
  z-index: 998;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.media.above.s} {
    width: 127px;
  }

  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

export default MenuWrapper;
