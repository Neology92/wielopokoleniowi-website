import React from 'react';
import PropTypes from 'prop-types';

import lukasPortret from 'assets/images/LukasPortret.svg';

const LukasPortret = ({ className }) => (
  <img src={lukasPortret} alt="folder" className={className} />
);

LukasPortret.propTypes = {
  className: PropTypes.string,
};
LukasPortret.defaultProps = {
  className: '',
};

export default LukasPortret;
