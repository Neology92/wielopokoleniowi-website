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

const IndexPage = ({ data, location: { origin } }) => {
  const posts = [];
  const {
    graphcms: { everyone, bussines },
  } = data;

  for (let i = 0; i < 3; i++) {
    if (everyone[i]) posts.push(everyone[i]);
    if (bussines[i]) posts.push(bussines[i]);
  }

  return (
    <MainLayout path="/" isMainPage>
      <SEO title="Strona Główna" origin={origin} />
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
  location: PropTypes.shape(PropTypes.string).isRequired,
};

export default IndexPage;
