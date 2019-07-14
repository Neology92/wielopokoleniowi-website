import React from 'react';
import PropTypes from 'prop-types';

import telephone from 'assets/images/telephone.svg';

const Telephone = ({ className }) => (
  <img src={telephone} alt="Telefon" className={className} />
);

Telephone.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Telephone;
