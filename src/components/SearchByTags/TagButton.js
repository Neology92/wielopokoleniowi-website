import styled from 'styled-components';

const TagButton = styled.button`
  background: rgb(${({ theme }) => theme.color.rgb.white}, 0.1);
  color: rgb(${({ theme }) => theme.color.rgb.white}, 0.4);
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-size: 1.5rem;

  padding: 5px 10px;
  margin: 3px;
  border: none;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(-1px, -2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 2px 0px -1px ${({ theme }) => theme.color.white};
  }
`;

export default TagButton;
