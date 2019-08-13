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
    const setSearchState = str => {
      this.setState({
        search: str,
      });
    };
    const {
      location: { pathname },
      data,
    } = this.props;
    const posts = data.graphcms.everyone.edges;
    const { search } = this.state;

    const filteredPosts = posts.filter(edge => {
      const filteredTags = edge.node.tags.filter(
        tag => tag.value.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );

      return (
        edge.node.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        filteredTags.length > 0
      );
    });

    return (
      <MainLayout path={pathname}>
        <SEO title="Dla Każdego" />
        <StyledContainer>
          <BreadcrumbsWrapper>
            <Breadcrumbs path={pathname} />
          </BreadcrumbsWrapper>
          <PostsSortingHeader path={pathname} setSearchState={setSearchState} />
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
