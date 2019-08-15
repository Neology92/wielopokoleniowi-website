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
          <div id="icon">
            <StyledIcon src={bussines} />
          </div>
          <div id="category">
            <StyledH2>Dla Biznesu</StyledH2>
            <StyledButton to={`${path}/pierwsze-kroki`}>
              <StyledIcon src={arrow} />
              Zacznij tutaj!
            </StyledButton>
          </div>
        </>
      ) : (
        <>
          <div id="icon">
            <StyledIcon src={everyone} />
          </div>
          <div id="category">
            <StyledH2> Dla Każdego</StyledH2>
            <StyledButton to={`${path}/pierwsze-kroki`}>
              <StyledIcon src={arrow} />
              Zacznij Tutaj!
            </StyledButton>
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  box-sizing: border-box;
  padding: 21px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 60%;
    height: 100%;
    padding: 0 0 0 27px;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    #icon {
      height: 100%;

      & > ${StyledIcon} {
        width: 145px;
      }
    }

    #category {
      width: 100%;
      height: 100%;

      margin: 0 0 0 30px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;

InnerWrapperLeft.propTypes = {
  path: PropTypes.string.isRequired,
};

export default InnerWrapperLeft;
