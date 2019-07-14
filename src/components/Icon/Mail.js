import React from 'react';
import PropTypes from 'prop-types';

import mail from 'assets/images/mail.svg';

const Mail = ({ className }) => (
  <img src={mail} alt="Mail" className={className} />
);

Mail.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Mail;
