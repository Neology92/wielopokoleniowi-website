import React from 'react';
import PropTypes from 'prop-types';

import everyone from 'assets/images/everyone.svg';

const Everyone = ({ className }) => (
  <img src={everyone} alt="people" className={className} />
);

Everyone.propTypes = {
  className: PropTypes.string,
};
Everyone.defaultProps = {
  className: '',
};

export default Everyone;
