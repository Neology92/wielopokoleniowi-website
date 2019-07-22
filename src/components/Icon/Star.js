import React from 'react';
import PropTypes from 'prop-types';

import star from 'assets/images/star.svg';

const Star = ({ className }) => (
  <img src={star} alt="Star" className={className} />
);

Star.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Star;
