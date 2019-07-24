import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import IconBackground from './IconBackground';

const PostGraphics = ({ category, icon }) => (
  <IconBackground category={category}>
    <Icon src={icon} alt="Post icon" />
  </IconBackground>
);

PostGraphics.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PostGraphics;
