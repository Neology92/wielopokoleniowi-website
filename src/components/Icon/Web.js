import React from 'react';
import PropTypes from 'prop-types';

import web from 'assets/images/web.svg';

const Web = ({ className }) => (
  <img src={web} alt="Website" className={className} />
);

Web.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Web;
