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

const IndexPage = ({ data }) => {
  const posts = [];

  data.graphcms.everyone.forEach((post, i) => {
    posts.push(post);
    if (data.graphcms.bussines[i]) posts.push(data.graphcms.bussines[i]);
  });

  return (
    <MainLayout path="/" isMainPage>
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
  query {
    graphcms {
      everyone: posts(
        first: 3
        orderBy: createdAt_DESC
        where: { category: Everyone }
        stage: PUBLISHED
      ) {
        title
        category
        level
        body {
          html
          text
        }
        excerpt
        icon {
          url
        }
        tags {
          value
        }
      }
      bussines: posts(
        first: 3
        orderBy: createdAt_DESC
        where: { category: Bussines }
        stage: PUBLISHED
      ) {
        title
        category
        level
        body {
          html
          text
        }
        excerpt
        icon {
          url
        }
        tags {
          value
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;
