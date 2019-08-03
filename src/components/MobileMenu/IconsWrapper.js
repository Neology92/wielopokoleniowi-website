import styled from 'styled-components';

const IconsWrapper = styled.div`
  height: 115px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '150%')});
  transition: opacity 0.3s 0.2s ease-in-out, transform 0.4s 0.2s ease-in-out;
`;

export default IconsWrapper;
