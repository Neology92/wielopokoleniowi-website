import React from 'react';
import PropTypes from 'prop-types';

import bussines from 'assets/images/bussines.svg';

const Bussines = ({ className }) => (
  <img src={bussines} alt="folder" className={className} />
);

Bussines.propTypes = {
  className: PropTypes.string,
};
Bussines.defaultProps = {
  className: '',
};

export default Bussines;
