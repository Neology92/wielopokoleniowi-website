import React from 'react';
import PropTypes from 'prop-types';

import everyoneMenu from 'assets/images/everyoneMenu.svg';

const EveryoneMenu = ({ className }) => (
  <img src={everyoneMenu} alt="folder" className={className} />
);

EveryoneMenu.propTypes = {
  className: PropTypes.string,
};
EveryoneMenu.defaultProps = {
  className: '',
};

export default EveryoneMenu;
