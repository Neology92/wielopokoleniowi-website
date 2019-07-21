import React from 'react';
import PropTypes from 'prop-types';

import yt from 'assets/images/yt.svg';

const Youtube = ({ className }) => (
  <img src={yt} alt="Youtube logo" className={className} />
);

Youtube.propTypes = {
  className: PropTypes.string,
};
Youtube.defaultProps = {
  className: '',
};

export default Youtube;
