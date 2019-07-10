import React from 'react';
import styled from 'styled-components';

export const BurgerButton = () => (
  <Button>
    <Wrapper>
      <Burger />
    </Wrapper>
  </Button>
);

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 15px;
`;

const Wrapper = styled.div`
  width: 28px;
  height: 20px;
`;
const Burger = styled.div`
  position: relative;

  &,
  &::after,
  &::before {
    content: '';
    width: 28px;
    height: 2px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
  }

  &::after {
    left: 0px;
    top: 18px;
  }

  &::before {
    left: 0px;
    top: 9px;
  }
`;
