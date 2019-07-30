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
    <MainLayout isPost>
      <SEO title={data.title} />
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
    </MainLayout>
  );
};

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
