import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = ({ to, isTransparent, children, className }) => {
  return (
    <ButtonLink to={to} className={className} isTransparent={isTransparent}>
      {children}
    </ButtonLink>
  );
};

const ButtonLink = styled(Link)`
  text-decoration: none;
  height: 33px;
  font-size: 14px;

  padding: 0px 25px;
  background: ${({ isTransparent, theme }) =>
    isTransparent ? 'none' : theme.color.lightBlue};

  border: ${({ isTransparent, theme }) =>
    isTransparent ? `1px solid ${theme.color.darkBlue}` : 'none'};
  border-radius: 10px;

  color: ${({ isTransparent, theme }) =>
    isTransparent ? theme.color.darkBlue : theme.color.white};

  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  line-height: 240%;

  ${({ theme }) => theme.media.above.l} {
    line-height: 200%;
    font-size: 18px;
    height: 36px;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  isTransparent: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  to: '/',
  isTransparent: false,
  className: '',
};

export default Button;
