import styled from 'styled-components';
import PropTypes from 'prop-types';

import React from 'react';

const TileIconBg = ({ category, icon }) => (
  <IconWrapper category={category}>
    <img src={icon} alt="article icon" />
  </IconWrapper>
);

const IconWrapper = styled.div`
  width: 100%;
  height: 44%;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ category, theme }) => {
    if (category === 'Bussines') return theme.color.nightBlue;
    return theme.color.lightBlue;
  }};

  ${({ theme }) => theme.media.above.l} {
    height: 50%;
  }
`;

TileIconBg.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

TileIconBg.defaultProps = {
  icon: '',
};

export default TileIconBg;
