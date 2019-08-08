import React from 'react';
import PropTypes from 'prop-types';

import bussines from 'assets/images/bussines.svg';
import everyone from 'assets/images/everyone.svg';
import arrow from 'assets/images/arrow.svg';
import TileWrapper from './TileWrapper';
import { InnerWrapperLeft, InnerWrapperRight } from './InnerWrappers';
import { StyledH2, StyledIcon, StyledButton } from './styled';

const PostsSortingTile = ({ path }) => {
  return (
    <TileWrapper category={path}>
      <InnerWrapperLeft>
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
      </InnerWrapperLeft>
      <InnerWrapperRight />
    </TileWrapper>
  );
};

PostsSortingTile.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PostsSortingTile;
