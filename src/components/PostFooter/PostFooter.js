import React from 'react';
import styled from 'styled-components';

import PostFooterGraphics from '../PostFooterGraphics/PostFooterGraphics';
import PostFooterWrapper from './PostFooterWrapper';
import TextParagraph from '../TextParagraph/TextParagraph';

const PostFooter = () => {
  return (
    <PostFooterWrapper>
      <GraphicsWrapper>
        <PostFooterGraphics />
      </GraphicsWrapper>
      <StyledParagraph>
        <span>Wielopokoleniowi.pl</span> to miejsce, gdzie piszemy i mówimy
        m.in. o tego typu tematach. Rozkładamy na czynniki pierwsze różne ich
        aspekty i uczymy się na błędach innych.Żeby takich historii było jak
        najmniej. Żeby być mądrzejszym i sprytniejszym. Żeby zachować wpływ
        przynajmniej na tę część otaczającej nas rzeczywistości, na którą się
        da. Jeśli chcesz być na bieżąco, zapisz się na nasz Newsletter.
        Zapraszam!
      </StyledParagraph>
    </PostFooterWrapper>
  );
};

const GraphicsWrapper = styled.div`
  margin: 30px auto 0;
  width: 60%;
`;

const StyledParagraph = styled(TextParagraph)`
  color: ${({ theme }) => theme.color.darkBlue};
  text-align: center;
  font-weight: 400;
  line-height: 140%;

  & span {
    font-weight: 700;
  }

  ${({ theme }) => theme.media.above.s} {
    font-size: 1.4rem;
  }

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.6rem;
  }
`;

export default PostFooter;
