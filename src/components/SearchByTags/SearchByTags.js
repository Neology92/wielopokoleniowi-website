import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagButton from './TagButton';
import Container from './Container';
import { StyledH3 } from './styled';

class SearchByTags extends Component {
  constructor(props) {
    super(props);
    const { tags } = this.props;

    this.state = {
      isButtonClicked: Array(tags.length).fill(false),
    };
  }

  render() {
    const { isButtonClicked } = this.state;
    const { tags, setFilterTags, filterTags } = this.props;

    function switchTag(item, index) {
      if (filterTags.filter(tag => tag === item).length === 1) {
        setFilterTags(filterTags.filter(tag => tag !== item));
      } else {
        setFilterTags([...filterTags, item]);
      }
      isButtonClicked[index] = !isButtonClicked[index];
    }

    return (
      <Container>
        <StyledH3>Popularne tematy</StyledH3>
        {tags.map(({ node: { value } }, index) => (
          <TagButton
            key={value}
            type="button"
            onClick={e => {
              switchTag(e.currentTarget.name, e.currentTarget.value);
            }}
            value={index}
            name={value}
            className={isButtonClicked[index] ? 'active' : ''}
          >
            {value}
          </TagButton>
        ))}
      </Container>
    );
  }
}

SearchByTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.node).isRequired,
  setFilterTags: PropTypes.func.isRequired,
  filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchByTags;
