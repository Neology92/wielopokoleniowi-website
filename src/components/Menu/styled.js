import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.nightBlue};
  font-size: 2.4rem;
  font-weight: 400;
  text-decoration: none;
`;

export const StyledButton = styled.button`
  padding: 0;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.nightBlue};
  font-size: 2.4rem;
  font-weight: 400;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
