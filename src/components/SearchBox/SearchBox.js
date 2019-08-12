import React from 'react';
import styled from 'styled-components';

import magnifier from 'assets/images/magnifier.svg';
import { StyledIcon, StyledInput } from './styled';

const SearchBox = () => {
  return (
    <Container>
      <StyledInput type="text" placeholder="Czego szukasz?" />
      <StyledIcon src={magnifier} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default SearchBox;
