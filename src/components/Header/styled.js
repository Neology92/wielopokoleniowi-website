import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';
import logo from 'assets/images/logo.svg';

export const HeaderWrap = styled.header`
  padding: 0 -5px;
  width: 100%;
  height: 84px;
  background-image: url(${bgImage});
  background-size: cover;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;

  ${({ theme }) => theme.media.above.m} {
    height: 160px;
  }
`;

export const CenterC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = ({ width }) => (
  <img src={logo} alt="Logo Wielopokoleniowi" width={width} />
);

Logo.propTypes = {
  width: PropTypes.node.isRequired,
};
