import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'gatsby';
import styled from 'styled-components';

import propTypeCommons from '../../utils/propTypeCommons';

import PostTile from '../PostTile/PostTile';
import RecommendedWrapper from './RecommendedWrapper';
import PostsWrapper from './PostsWrapper';
import TileWrapper from './TileWrapper';
import { SidebarSectionHeading } from '../Headings/Headings';

const Recommended = ({ recommendedPosts }) => {
  return (
    <RecommendedWrapper>
      <SidebarSectionHeading>Polecam również:</SidebarSectionHeading>
      <PostsWrapper>
        {recommendedPosts.map(post => (
          <div key={post.id}>
            <TileWrapper>
              <StyledLink to={`/${slugify(post.title.toLowerCase())}`}>
                <PostTile post={post} />
              </StyledLink>
            </TileWrapper>
          </div>
        ))}
      </PostsWrapper>
    </RecommendedWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

Recommended.propTypes = {
  recommendedPosts: PropTypes.arrayOf(propTypeCommons.post),
};

Recommended.defaultProps = {
  recommendedPosts: [],
};

export default Recommended;
