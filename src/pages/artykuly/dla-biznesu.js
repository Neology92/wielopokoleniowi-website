import React, { Component } from 'react';
import { graphql } from 'gatsby';

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

class BussinesPosts extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      filterTags: [],
    };
  }

  render() {
    // Data destructuring
    const {
      location: { pathname },
      data: {
        graphcms: { posts, tags: queryTags },
      },
    } = this.props;
    const { search, filterTags } = this.state;

    // Functions
    const setSearchValue = str => {
      this.setState({
        search: str,
      });
    };
    const setFilterTags = arr => {
      this.setState({
        filterTags: arr,
      });
    };
    const filterByTags = post => {
      return post.tags.filter(
        tag => filterTags.filter(filterTag => filterTag === tag.value).length
      );
    };

    // if
    const ifTagsResults = post => {
      const filteredTags = filterByTags(post);
      // return filteredTags.length === filterTags.length; //! Intersection of sets
      return filteredTags.length > 0 || !filterTags.length; //! Sum
    };
    const ifSearchResults = post =>
      post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      post.tags.filter(
        tag => tag.value.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ).length;

    // Filter posts
    const filteredPosts = posts.filter(post => {
      return ifSearchResults(post) && ifTagsResults(post);
    });

    return (
      <MainLayout path={pathname}>
        <SEO title="Dla Biznesu" />
        <StyledContainer>
          <BreadcrumbsWrapper>
            <Breadcrumbs path={pathname} />
          </BreadcrumbsWrapper>
          <PostsSortingHeader
            path={pathname}
            setSearchValue={setSearchValue}
            setFilterTags={setFilterTags}
            filterTags={filterTags}
            tags={queryTags}
          />
          <PostsGrid posts={filteredPosts} />
        </StyledContainer>
      </MainLayout>
    );
  }
}

export const bussinesPostsQuery = graphql`
  query {
    graphcms {
      posts(
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
        icon {
          url
        }
        tags {
          value
        }
      }
      tags(orderBy: createdAt_DESC, stage: PUBLISHED, first: 8) {
        value
      }
    }
  }
`;

BussinesPosts.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
  data: PropTypes.isRequired,
};
export default BussinesPosts;
