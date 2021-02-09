import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Heading, Body } from './styled';

const Definition = ({ word, definition }) => {
  return (
    <Wrapper>
      <Heading>{word}</Heading>
      <Body>{definition}</Body>
    </Wrapper>
  );
};

Definition.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
};

export default Definition;
