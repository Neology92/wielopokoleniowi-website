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
            <StyledButton to={`${path}/pierwsze-kroki`}>
              <StyledIcon src={arrow} />
              Zacznij tutaj!
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

  width: 90%;
  padding: 21px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 51%;
    height: 100%;
    padding: 0 0 0 27px;

    justify-content: flex-start;
    align-items: center;
  }
`;

InnerWrapperLeft.propTypes = {
  path: PropTypes.string.isRequired,
};

export default InnerWrapperLeft;
