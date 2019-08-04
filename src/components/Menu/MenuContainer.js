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
    border-bottom: 2px solid
      rgba(${({ theme }) => theme.color.rgb.darkBlue}, 0.1);

    font-family: ${({ theme }) => theme.font.family.atma};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: calc (50% - 8px);
    width: 0;
    height: 0;
    border-style: solid;
    border-top: 11px solid rgba(${({ theme }) => theme.color.rgb.darkBlue}, 0.1);
    border-right: 8px solid transparent;
    border-bottom: 0;
    border-left: 8px solid transparent;
  }
`;

export default MenuContainer;
