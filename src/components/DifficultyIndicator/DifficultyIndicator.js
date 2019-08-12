import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Star from '../Icon/Star';

const StyledStar = styled(Star)`
  padding: 1px;
  height: 11px;
  opacity: ${({ isBright }) => (isBright ? 1 : 0.25)};
`;

const Indicator = ({ className, level }) => {
  const stars = [];

  for (let i = 0; i < level; i++) {
    stars.push(<StyledStar isBright key={i} />);
  }
  for (let i = 3; i > level; i--) {
    stars.push(<StyledStar key={i} />);
  }

  return <div className={className}>{stars}</div>;
};

const DifficultyIndicator = styled(Indicator)`
  display: flex;
  flex-direction: row;
  margin: 8px;
  width: 39px;
`;

Indicator.propTypes = {
  className: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default DifficultyIndicator;
