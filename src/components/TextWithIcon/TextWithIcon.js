import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledIcon } from './styled';
import Inner from './Inner';

const TextWithIcon = ({ children, src, isRight, isBlue }) => (
  <Wrapper isRight={isRight}>
    <div>
      <StyledIcon src={src} isRight={isRight} />
    </div>
    <Inner isBlue={isBlue}>{children}</Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 0 45px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.above.l} {
    flex-direction: ${({ isRight }) => (isRight ? 'row-reverse' : 'row')};
    justify-content: space-between;
    margin: 0;
  }
`;

TextWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  isRight: PropTypes.bool,
  isBlue: PropTypes.bool,
};

TextWithIcon.defaultProps = {
  isRight: false,
  isBlue: false,
};

export default TextWithIcon;
