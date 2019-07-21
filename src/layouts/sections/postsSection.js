import React from 'react';
import styled from 'styled-components';

import { SectionHeading, PostsGrid } from 'components';

const SectionWrapper = styled.section`
  margin: 30px 10px 0;
  text-align: center;
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
