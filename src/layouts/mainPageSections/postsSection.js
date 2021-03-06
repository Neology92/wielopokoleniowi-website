import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionHeading, PostsGrid } from 'components';
import propTypeCommons from '../../utils/propTypeCommons';

const SectionWrapper = styled.section`
  margin: 20px 10px 0;
  text-align: center;
  ${({ theme }) => theme.media.above.m} {
    margin: 80px 10px 0;
  }
`;

const PostsSection = ({ posts }) => {
  return (
    <SectionWrapper>
      <SectionHeading>Najnowsze artykuły</SectionHeading>
      <PostsGrid posts={posts} />
    </SectionWrapper>
  );
};

PostsSection.propTypes = {
  posts: PropTypes.arrayOf(propTypeCommons.post).isRequired,
};
export default PostsSection;
