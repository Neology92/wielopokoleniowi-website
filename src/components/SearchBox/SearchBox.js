import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import magnifier from 'assets/images/magnifier.svg';
import { StyledIcon, StyledInput } from './styled';

const SearchBox = ({ setSearchValue }) => {
  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Czego szukasz?"
        onChange={e => setSearchValue(e.target.value)}
      />
      <StyledIcon src={magnifier} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

SearchBox.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBox;
