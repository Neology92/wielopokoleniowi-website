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

class EveryonePosts extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      filterTags: [],
    };
  }

  // update() {
  //   const distanceToBottom =
  //     document.documentElement.offsetHeight -
  //     (window.scrollY + window.innerHeight)
  //   if (this.state.showingMore && distanceToBottom < 100) {
  //     this.setState({ postsToShow: this.state.postsToShow + 12 })
  //   }
  //   this.ticking = false
  // }
  // handleScroll = () => {
  //   if (!this.ticking) {
  //     this.ticking = true
  //     requestAnimationFrame(() => this.update())
  //   }
  // }

  // componentDidMount() {
  // window.addEventListener(`scroll`, this.handleScroll)
  // }

  // componentWillUnmount() {
  // window.removeEventListener(`scroll`, this.handleScroll)
  // window.postsToShow = this.state.postsToShow
  // }

  render() {
    // Data destructuring
    const {
      location: { pathname },
      data,
    } = this.props;
    const posts = data.graphcms.everyone.edges;
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
    const filterByTags = edge => {
      return edge.node.tags.filter(
        tag => filterTags.filter(filterTag => filterTag === tag.value).length
      );
    };

    // if
    const ifTagsResults = edge => {
      const filteredTags = filterByTags(edge);
      return filteredTags.length === filterTags.length;
    };
    const ifSearchResults = edge =>
      edge.node.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      edge.node.tags.filter(
        tag => tag.value.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ).length;

    // Filter posts
    const filteredPosts = posts.filter(edge => {
      return ifSearchResults(edge) && ifTagsResults(edge);
    });

    return (
      <MainLayout path={pathname}>
        <SEO title="Dla Każdego" />
        <StyledContainer>
          <BreadcrumbsWrapper>
            <Breadcrumbs path={pathname} />
          </BreadcrumbsWrapper>
          <PostsSortingHeader
            path={pathname}
            setSearchValue={setSearchValue}
            setFilterTags={setFilterTags}
            filterTags={filterTags}
          />
          <PostsGrid posts={filteredPosts} />
        </StyledContainer>
      </MainLayout>
    );
  }
}

export const everyonePostsQuery = graphql`
  query {
    graphcms {
      everyone: postsConnection(
        orderBy: createdAt_DESC
        where: { category: Everyone, status: PUBLISHED }
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
`;

EveryonePosts.propTypes = {
  location: PropTypes.shape(PropTypes.string).isRequired,
  data: PropTypes.node.isRequired,
};
export default EveryonePosts;
