import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Menu } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 0 10vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostLayout = ({ pageContext: { data } }) => (
  <MainLayout>
    <SEO title="Home" />
    <Menu />
    <StyledContainer>
      <br />
      <h1>{data.title}</h1>
    </StyledContainer>
  </MainLayout>
);

PostLayout.propTypes = {
  pageContext: PropTypes.node.isRequired,
};

export default PostLayout;
