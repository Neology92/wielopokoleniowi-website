import React from 'react';
import styled from 'styled-components';

import { SectionHeading, PostsGrid } from 'components';

const SectionWrapper = styled.section`
  margin: 58px 10px 0;
  text-align: center;
  ${({ theme }) => theme.media.above.m} {
    margin: 80px 10px 0;
  }
`;

const PostsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeading>Najnowsze artykuły</SectionHeading>
      <PostsGrid />
    </SectionWrapper>
  );
};

export default PostsSection;
