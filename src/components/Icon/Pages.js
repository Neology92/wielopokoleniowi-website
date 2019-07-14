import React from 'react';
import PropTypes from 'prop-types';

import pages from 'assets/images/pages.svg';

const Pages = ({ className }) => (
  <img src={pages} alt="Pages" className={className} />
);

Pages.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Pages;
