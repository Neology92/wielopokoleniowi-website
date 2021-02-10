import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.color.red};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => theme.font.family.atma};

  width: 250px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGrey};
`;

export const Body = styled.p`
  padding: 5px 15px;
  margin-top: 10px;

  text-align: justify;
  color: ${({ theme }) => theme.color.textColor};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => theme.font.family.roboto};
`;
