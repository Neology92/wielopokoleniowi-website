import styled from 'styled-components';

const MenuContainer = styled.div`
  position: relative;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    position: relative;
    width: 656px;
    height: 100%;
    border-bottom: 3px solid
      rgba(${({ theme }) => theme.color.rgb.darkBlue}, 0.12);

    font-family: ${({ theme }) => theme.font.family.atma};

    transform: translate3d(
      0,
      ${({ isCategoryBarOpen }) => (isCategoryBarOpen ? '-69px' : '0')},
      0
    );
    transition: transform 0.2s 0s ease-in-out;
  }

  nav::after {
    content: '';
    position: absolute;
    bottom: -14px;
    left: calc(50% - 8px);
    width: 0;
    height: 0;
    border-style: solid;
    border-top: 11px solid
      rgba(${({ theme }) => theme.color.rgb.darkBlue}, 0.12);
    border-right: 8px solid transparent;
    border-bottom: 0;
    border-left: 8px solid transparent;
  }
`;

export default MenuContainer;
