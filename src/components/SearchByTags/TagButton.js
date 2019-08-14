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
`;

export default TagButton;
