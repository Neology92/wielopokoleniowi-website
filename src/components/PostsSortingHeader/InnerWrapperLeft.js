import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import bussines from 'assets/images/bussines.svg';
import everyone from 'assets/images/everyone.svg';
import arrow from 'assets/images/arrow.svg';

import { StyledH2, StyledIcon, StyledButton } from './styled';

const InnerWrapperLeft = ({ path }) => {
  return (
    <Container>
      {path === '/artykuly/dla-biznesu' ? (
        <>
          <div>
            <StyledIcon src={bussines} />
          </div>
          <div>
            <StyledH2>Dla Biznesu</StyledH2>
            <StyledButton to="/artykuly/dla-kazdego">
              <StyledIcon src={arrow} />
              &nbsp; Dla Każdego
            </StyledButton>
          </div>
        </>
      ) : (
        <>
          <div>
            <StyledIcon src={everyone} />
          </div>
          <div>
            <StyledH2> Dla Każdego</StyledH2>
            <StyledButton to="/artykuly/dla-biznesu">
              <StyledIcon src={arrow} />
              &nbsp; Dla Biznesu
            </StyledButton>
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 51%;
  height: 100%;
  padding: 0 0 0 27px;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div:first-of-type {
    width: 145px;
    margin: 0 3vw 0 0;
  }
`;

InnerWrapperLeft.propTypes = {
  path: PropTypes.string.isRequired,
};

export default InnerWrapperLeft;
