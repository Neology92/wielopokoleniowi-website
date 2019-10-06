import React from 'react';
import PropTypes from 'prop-types';

import TileWrapper from './TileWrapper';

const FirstStepsHeader = ({ path }) => {
  return <TileWrapper category={path} />;
};

FirstStepsHeader.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FirstStepsHeader;
