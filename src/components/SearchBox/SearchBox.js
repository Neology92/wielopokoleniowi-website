import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import magnifier from 'assets/images/magnifier.svg';
import { StyledIcon, StyledInput } from './styled';

const SearchBox = ({ setSearchValue, setFilterTags, filterTags, tags }) => {
  function switchTag(item) {
    if (filterTags.filter(tag => tag === item).length === 1) {
      setFilterTags(filterTags.filter(tag => tag !== item));
    } else {
      setFilterTags([...filterTags, item]);
    }
  }

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Czego szukasz?"
        onChange={e => setSearchValue(e.target.value)}
      />
      <StyledIcon src={magnifier} />

      {tags.map(({ node: { value } }) => (
        <button
          key={value}
          type="button"
          onClick={e => {
            switchTag(e.target.value);
          }}
          value={value}
        >
          {value}
        </button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

SearchBox.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  setFilterTags: PropTypes.func.isRequired,
  filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default SearchBox;
