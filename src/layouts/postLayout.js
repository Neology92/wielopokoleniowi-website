import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Menu } from 'components';

import HeadingSection from './postSections/headingSection';
import BodySection from './postSections/bodySection';
import SidebarSection from './postSections/sidebarSection';

const StyledContainer = styled.div`
  margin: 60px auto 10vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.m} {
    width: 89%;
  }

  ${({ theme }) => theme.media.above.l} {
    flex-direction: row;
    align-items: stretch;
  }

  ${({ theme }) => theme.media.above.xl} {
    flex-direction: row;
    width: 1070px;

    align-items: stretch;
  }
`;

const MainWrapper = styled.main`
  width: 100%;

  ${({ theme }) => theme.media.above.l} {
    width: 66%;
  }
`;

const PostLayout = ({ pageContext: { data } }) => (
  <MainLayout>
    <SEO title={data.title} />
    <Menu />
    <StyledContainer>
      <MainWrapper>
        <HeadingSection
          title={data.title}
          category={data.category}
          icon={data.icon.url}
        />
        <BodySection content={data.body.text} />
      </MainWrapper>
      <SidebarSection />
    </StyledContainer>
  </MainLayout>
);

PostLayout.propTypes = {
  pageContext: PropTypes.node.isRequired,
};

export default PostLayout;
