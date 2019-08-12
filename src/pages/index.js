import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  MainLayout,
  WelcomeSection,
  FirstStepsSection,
  PostsSection,
  AboutSection,
} from 'layouts';
import { SEO } from 'components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;

  ${({ theme }) => theme.media.above.m} {
    margin: 0 0 10vw 0;
  }
`;

const IndexPage = ({ location: { pathname }, data }) => {
  const posts = [];

  data.graphcms.everyone.edges.forEach((edge, i) => {
    posts.push(edge);
    posts.push(data.graphcms.bussines.edges[i]);
  });

  return (
    <MainLayout path={pathname} isMainPage>
      <SEO title="Home" />
      <StyledContainer>
        <WelcomeSection />
        <FirstStepsSection />
        <PostsSection posts={posts} />
        <AboutSection />
      </StyledContainer>
    </MainLayout>
  );
};

export const mainPagePostsQuery = graphql`
  {
    graphcms {
      everyone: postsConnection(
        first: 3
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
          }
        }
      }
      bussines: postsConnection(
        first: 3
        orderBy: createdAt_DESC
        where: { category: Bussines }
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
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
  data: PropTypes.node.isRequired,
};

export default IndexPage;
