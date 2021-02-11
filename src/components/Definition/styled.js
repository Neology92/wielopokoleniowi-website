import styled from 'styled-components';
import arrowRed from 'assets/images/arrowRed.svg';

export const Wrapper = styled.div`
  margin-top: 40px;
  margin-left: 25px;
`;

export const Heading = styled.h3`
  position: relative;
  color: ${({ theme }) => theme.color.red};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => theme.font.family.atma};

  width: 250px;
  margin: 0;
  border-bottom: 1px solid
    ${({ theme, isOpen }) => (isOpen ? theme.color.darkGrey : 'transparent')};

  cursor: pointer;
  user-select: none;

  ::before {
    content: '';
    width: 12px;
    height: 16px;
    position: absolute;

    left: -25px;
    top: 7px;

    background-image: url(${arrowRed});

    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease-in-out;
  }
`;

export const Body = styled.p`
  padding: 5px 0;
  margin-top: 10px;

  text-align: justify;
  color: ${({ theme }) => theme.color.textColor};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => theme.font.family.roboto};
`;
