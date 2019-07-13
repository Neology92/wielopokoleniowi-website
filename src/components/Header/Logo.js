import React from 'react';
import { PropTypes } from 'prop-types';

import logo from 'assets/images/logo.svg';

const Logo = ({ className }) => (
  <img src={logo} alt="Logo Wielopokoleniowi" className={className} />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
