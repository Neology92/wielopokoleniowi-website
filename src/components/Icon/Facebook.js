import React from 'react';
import PropTypes from 'prop-types';

import fb from 'assets/images/fb.svg';

const Facebook = ({ className }) => (
  <img src={fb} alt="Facebook logo" className={className} />
);

Facebook.propTypes = {
  className: PropTypes.string,
};
Facebook.defaultProps = {
  className: '',
};

export default Facebook;
