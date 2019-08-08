import React from 'react';
import PropTypes from 'prop-types';

import bussines from 'assets/images/bussines.svg';
import everyone from 'assets/images/everyone.svg';
import TileWrapper from './TileWrapper';
import { InnerWrapperLeft, InnerWrapperRight } from './InnerWrappers';
import { StyledH2, StyledIcon, StyledButton } from './styled';

const PostsSortingTile = ({ path }) => {
  return (
    <TileWrapper category={path}>
      <InnerWrapperLeft>
        {path === '/artykuly/dla-biznesu' ? (
          <>
            <StyledIcon src={bussines} />
            <div>
              <StyledH2>Dla Biznesu</StyledH2>
              <StyledButton> Dla Każdego</StyledButton>
            </div>
          </>
        ) : (
          <>
            <StyledIcon src={everyone} />
            <div>
              <StyledH2>Dla Każdego</StyledH2>
              <StyledButton> Dla Biznesu</StyledButton>
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
