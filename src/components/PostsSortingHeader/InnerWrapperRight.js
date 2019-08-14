import React from 'react';
import styled from 'styled-components';

import SearchBox from '../SearchBox/SearchBox';
import SearchByTags from '../SearchByTags/SearchByTags';

const InnerWrapperRight = ({ ...props }) => {
  return (
    <Container>
      <SearchBox {...props} />
      <SearchByTags {...props} />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  padding: 0 27px 0;
  height: 80%;
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default InnerWrapperRight;
