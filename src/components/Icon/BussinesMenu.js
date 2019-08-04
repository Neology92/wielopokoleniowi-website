import React from 'react';
import PropTypes from 'prop-types';

import bussinesMenu from 'assets/images/bussinesMenu.svg';

const BussinesMenu = ({ className }) => (
  <img src={bussinesMenu} alt="folder" className={className} />
);

BussinesMenu.propTypes = {
  className: PropTypes.string,
};
BussinesMenu.defaultProps = {
  className: '',
};

export default BussinesMenu;
