import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const Icon = ({ src, ...props }) => <SVG src={src} {...props} />;

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
