import React from 'react';
import styled from 'styled-components';

import SearchBox from '../SearchBox/SearchBox';

const InnerWrapperRight = () => {
  return (
    <Container>
      <SearchBox />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  padding: 0 27px 0;
  display: flex;

  flex-direction: column;
`;

export default InnerWrapperRight;
