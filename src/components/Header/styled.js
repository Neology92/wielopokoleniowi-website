import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/topBar.svg';
import logo from 'assets/images/logo.svg';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 84px;
  background-image: url(${bgImage});
  background-size: cover;
`;

export const Logo = () => <img src={logo} alt="Logo Wielopokoleniowi" />;
