import styled from 'styled-components';
import PropTypes from 'prop-types';

import React from 'react';

const TileIcon = ({ category, icon }) => (
  <IconWrapper category={category}>
    <Icon src={icon} alt="article icon" />
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

const Icon = styled.img`
  margin: 15px auto;
  height: 65%;
`;

TileIcon.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

TileIcon.defaultProps = {
  icon: '',
};

export default TileIcon;
