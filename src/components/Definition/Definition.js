import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Heading, Body } from './styled';

const Definition = ({ word, definition }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Heading isOpen={isOpen} onClick={handleClick}>
        {word}
      </Heading>
      {isOpen && <Body>{definition}</Body>}
    </Wrapper>
  );
};

Definition.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
};

export default Definition;
