import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 15px;
  position: absolute;
  z-index: 999;

  &:active {
    outline: blue;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  width: 28px;
  height: 22px;
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

const Hamburger = () => (
  <HamburgerWrapper>
    <InnerWrapper>
      <Burger />
    </InnerWrapper>
  </HamburgerWrapper>
);

export default Hamburger;
