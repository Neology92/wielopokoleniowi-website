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
  width: 50%;
  padding: 0 30px 0 0;
  display: flex;

  flex-direction: column;
`;

export default InnerWrapperRight;
