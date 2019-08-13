import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBox from '../SearchBox/SearchBox';

const InnerWrapperRight = ({ setSearchState }) => {
  return (
    <Container>
      <SearchBox setSearchState={setSearchState} />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  padding: 0 27px 0;
  display: flex;

  flex-direction: column;
`;

InnerWrapperRight.propTypes = {
  setSearchState: PropTypes.func.isRequired,
};

export default InnerWrapperRight;
