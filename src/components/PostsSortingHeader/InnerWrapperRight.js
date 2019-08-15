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
  width: 90%;
  margin: 0 auto;

  ${({ theme }) => theme.media.above.s} {
    width: 92%;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 95%;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 40%;
    padding: 0 27px 0;
    height: 100%;

    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.media.above.xl} {
    width: 55%;
  }
`;

export default InnerWrapperRight;
