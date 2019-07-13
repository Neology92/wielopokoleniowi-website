import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MobileMenu = ({ className }) => (
  <MenuWrapper className={className}>
    <div />
  </MenuWrapper>
);

const MenuWrapper = styled.nav`
  height: 610px;
  width: 100%;
  position: absolute;
  z-index: 998;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.darkBlue};

  ${({ theme }) => theme.media.above.s} {
    width: 127px;
  }

  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

MobileMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MobileMenu;
