import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Star from '../Icon/Star';

const StyledStar = styled(Star)`
  padding: 1px;
  height: 11px;
  opacity: ${({ isBright }) => (isBright ? 1 : 0.3)};

  ${({ theme }) => theme.media.below.l} {
    height: 8px;
  }
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
  flex-direction: column-reverse;
  row-gap: 2px;
  margin: 15px;

  ${({ theme }) => theme.media.below.l} {
    margin-top: 10px;
    margin-left: 8px;
    row-gap: 1px;
  }
`;

Indicator.propTypes = {
  className: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default DifficultyIndicator;
