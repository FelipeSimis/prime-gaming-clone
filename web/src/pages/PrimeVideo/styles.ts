import styled, { keyframes } from 'styled-components';

import { AiFillQuestionCircle } from 'react-icons/ai';

const fadeIn = keyframes`
  0% { opacity: 0; }
  40%, 80% { opacity: 1; }
`;

export const Container = styled.div`
  grid-area: content;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 3s linear forwards;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;
`;

export const Header = styled.div`
  position: relative;
  top: -40px;
  margin-left: 60px;

  display: flex;
  align-items: flex-start;

  > img {
    width: 89px;
    height: 24px;
  }
`;

export const QuestionIcon = styled(AiFillQuestionCircle)`
  width: 14px;
  height: 14px;
  fill: var(--gray);
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    fill: var(--white);
  }
`;

export const MovieSection = styled.div`
  padding: 0 32px;

  > .wrapper-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 57px;

    > h1 {
      font-size: 28px;
      font-weight: 300;
      color: var(--lighter);
      margin-bottom: 8px;
    }

    > span {
      font-size: 14px;
      font-weight: 300;
      color: var(--description);
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 16px;

  &:not(:first-child) {
    margin-top: 30px;
  }

  > .recommendation-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h2 {
      font-size: 16px;
      font-weight: 400;
      color: var(--lighter);
      margin-bottom: 4px;
    }

    > span {
      font-size: 12px;
      color: var(--description);
    }
  }

  > .link {
    > a {
      font-size: 12px;
      color: var(--blue);
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;

  &:hover {
    overflow-x: auto;
  }

  > div {
    margin: 0 8px;
  }

  ::-webkit-scrollbar {
    height: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--footer);
  }

  @media (min-width: 1100px) {
    overflow: hidden;
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  width: 224px;
  height: 126px;
  border-radius: 6px;
  margin-bottom: 8px;
  cursor: pointer;

  @media (min-width: 1100px) {
    width: 298px;
    height: 167px;
  }
`;

export const WrapperCarousel = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 144px;
  margin: 0 auto 40px;

  @media (min-width: 1100px) {
    height: unset;
  }
`;
