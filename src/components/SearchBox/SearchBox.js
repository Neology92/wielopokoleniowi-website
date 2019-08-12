import React from 'react';
import styled from 'styled-components';

const SearchBox = () => {
  return <StyledInput type="text" placeholder="Czego szukasz?" />;
};

const StyledInput = styled.input`
  width: 90%;
  padding: 10px 20px;
  border: none;
  background: rgb(${({ theme }) => theme.color.rgb.white}, 0.1);
  border-radius: 50px;

  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 400;
  font-size: 1.8rem;

  &::placeholder {
    color: rgb(${({ theme }) => theme.color.rgb.white}, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0px -50px 0px -49px ${({ theme }) => theme.color.white} inset;
  }
`;

export default SearchBox;
