import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import magnifier from 'assets/images/magnifier.svg';
import { StyledIcon, StyledInput } from './styled';

const SearchBox = ({ setSearchState }) => {
  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Czego szukasz?"
        onChange={e => setSearchState(e.target.value)}
      />
      <StyledIcon src={magnifier} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

SearchBox.propTypes = {
  setSearchState: PropTypes.func.isRequired,
};

export default SearchBox;
