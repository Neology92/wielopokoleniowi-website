import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Menu } from 'components';

import HeadingSection from './postSections/headingSection';
import BodySection from './postSections/bodySection';
import SidebarSection from './postSections/sidebarSection';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.m} {
    flex-direction: row;
    width: 80%;
    margin: 60px auto 10vw;

    div {
      width: 66%;
      height: 100%;
    }

    align-items: stretch;
  }
`;

const PostLayout = ({ pageContext: { data } }) => (
  <MainLayout>
    <SEO title={data.title} />
    <Menu />
    <StyledContainer>
      <div>
        <HeadingSection title={data.title} />
        <BodySection content={data.body.text} />
      </div>
      <SidebarSection />
    </StyledContainer>
  </MainLayout>
);

PostLayout.propTypes = {
  pageContext: PropTypes.node.isRequired,
};

export default PostLayout;
