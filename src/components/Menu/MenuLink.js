import styled from 'styled-components';

const MenuLink = styled.li`
  list-style: none;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(0, -4px);
  }
`;

export default MenuLink;
