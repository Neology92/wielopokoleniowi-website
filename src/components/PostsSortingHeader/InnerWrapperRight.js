import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBox from '../SearchBox/SearchBox';

const InnerWrapperRight = ({ setSearchValue, setFilterTags, filterTags }) => {
  return (
    <Container>
      <SearchBox
        setSearchValue={setSearchValue}
        setFilterTags={setFilterTags}
        filterTags={filterTags}
      />
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
  setSearchValue: PropTypes.func.isRequired,
  setFilterTags: PropTypes.func.isRequired,
  filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InnerWrapperRight;
