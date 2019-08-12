import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MainLayout } from 'layouts';
import { SEO, Breadcrumbs, PostsSortingHeader, PostsGrid } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  min-height: 80vh;
`;

const BreadcrumbsWrapper = styled.div`
  padding: 15px 0 0 15px;
  width: 100%;
`;

const EveryonePosts = ({ location: { pathname } }) => {
  const data = useStaticQuery(graphql`
    {
      graphcms {
        everyone: postsConnection(
          orderBy: createdAt_DESC
          where: { category: Everyone }
        ) {
          edges {
            node {
              title
              category
              level
              body {
                html
                text
              }
              icon {
                url
              }
              tags {
                value
              }
            }
          }
        }
      }
    }
  `);

  return (
    <MainLayout path={pathname}>
      <SEO title="Dla Każdego" />
      <StyledContainer>
        <BreadcrumbsWrapper>
          <Breadcrumbs path={pathname} />
        </BreadcrumbsWrapper>
        <PostsSortingHeader path={pathname} />
        <PostsGrid posts={data.graphcms.everyone.edges} />
      </StyledContainer>
    </MainLayout>
  );
};

EveryonePosts.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
};
export default EveryonePosts;
