import styled from 'styled-components';
import blop from 'assets/images/blop.svg';
import TextParagraph from '../TextParagraph/TextParagraph';

export const RulesList = styled.ol`
  counter-reset: rules-counter;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RuleItem = styled.li`
  counter-increment: rules-counter;

  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 140px 0 0 0;
  margin-left: auto;
  width: 100%;

  ${({ theme }) => theme.media.above.m} {
    margin: 0;
  }

  &::before {
    position: absolute;
    top: -70px;
    left: calc(50% - 27px);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.font.family.atma};
    color: white;
    content: counter(rules-counter) '. ';

    width: 54px;
    height: 51px;
    background-image: url(${blop});

    ${({ theme }) => theme.media.above.m} {
      top: -8px;
      left: -80px;
    }
  }
`;

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.font.family.atma};
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkBlue};
  text-align: center;

  margin: 25px 0 20px;
  ${({ theme }) => theme.media.above.m} {
    text-align: left;
    margin: 40px 0 30px;
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    margin: 60px 0 30px;
    font-size: 2.4rem;
  }
`;

export const Description = styled(TextParagraph)`
  text-align: justify;

  ${({ theme }) => theme.media.above.l} {
    font-size: 1.6rem;
  }
`;
