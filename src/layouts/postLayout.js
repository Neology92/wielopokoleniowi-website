import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO } from 'components';

import HeadingSection from './postSections/headingSection';
import BodySection from './postSections/bodySection';
import SidebarSection from './postSections/sidebarSection';

// eslint-disable-next-line
const parse = string => <div dangerouslySetInnerHTML={{ __html: string }} />;

const PostLayout = ({ pageContext: { data, recommendedPostsEdges } }) => {
  const content = <> {parse(data.body.html)} </>;

  const tagsArray = [];
  data.tags.forEach(tag => {
    tagsArray.push(tag.value);
  });

  return (
    <MainLayout>
      <SEO title={data.title} />
      <StyledContainer>
        <MainWrapper>
          <HeadingSection
            title={data.title}
            category={data.category}
            icon={data.icon.url}
          />
          <BodySection content={content} />
        </MainWrapper>
        <SidebarSection
          tags={tagsArray}
          recommendedPostsEdges={recommendedPostsEdges}
        />
      </StyledContainer>
    </MainLayout>
  );
};

const StyledContainer = styled.div`
  margin: 60px auto 10vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.s} {
    margin: 60px 8vw;
    width: 84vw;
  }

  ${({ theme }) => theme.media.above.m} {
    margin: 60px 15vw;
    width: 70vw;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 60px auto 10vw;
    width: 89%;
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

PostLayout.propTypes = {
  pageContext: PropTypes.node.isRequired,
};

export default PostLayout;
