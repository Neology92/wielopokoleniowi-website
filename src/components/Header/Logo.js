import React from 'react';
import { PropTypes } from 'prop-types';

import logo from 'assets/images/logo.svg';

const Logo = ({ className }) => (
  <img src={logo} alt="Wielopokoleniowi BLOG" className={className} />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
