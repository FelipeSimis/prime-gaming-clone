import styled, { css, keyframes } from 'styled-components';

import { AiFillQuestionCircle } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';

import BannerImage from '../../assets/banner.jpg';

interface SlideButtonProps {
  toLeft?: boolean;
  toRight?: boolean;
}

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

export const Banner = styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 280px;

  background: url(${BannerImage}) no-repeat 70% 100%;
  background-size: cover;

  > .title {
    font-size: 16px;
    color: var(--lighter);
  }

  @media (min-width: 400px) {
    background-position: 80% 100%;
  }

  @media (min-width: 1100px) {
    top: 0;
    background-position: center;
  }
`;

export const Row = styled.div`
  position: relative;

  margin-left: 45px;
  padding: 16px;
  display: flex;
  align-items: center;

  > img {
    width: 89px;
    height: 24px;
    margin-top: 5px;
  }

  > button {
    margin-left: 5px;

    &:hover > svg {
      fill: var(--white);
    }
  }

  @media (min-width: 1100px) {
    padding: 0;
    display: none;
  }
`;

export const QuestionIcon = styled(AiFillQuestionCircle)`
  width: 14px;
  height: 14px;
  fill: var(--gray);
`;

export const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .title {
    width: fit-content;
    font-size: 16px;
    color: var(--lighter);
    font-weight: normal;

    @media (min-width: 1100px) {
      font-size: 24px;
      max-width: 376px;
    }
  }

  > button {
    width: 145px;
    height: 40px;
    margin-top: 20px;
    position: relative;

    background: var(--blue);
    border-radius: 4px;
    transition: background 0.2s ease-in-out;

    > a {
      text-decoration: none;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      font-size: 16px;
      color: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      background: var(--blue-hover);
    }
  }

  @media (min-width: 1100px) {
    position: static;
    padding: 0 40px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }
`;

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  padding: 30px 40px;

  .wrapper-title > h2 {
    font-size: 28px;
    font-weight: 400;

    margin: 32px 0;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  width: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SlideButton = styled.button<SlideButtonProps>`
  position: absolute;
  top: 128px;

  ${props =>
    props.toLeft &&
    css`
      left: 10px;
    `}

  ${props =>
    props.toRight &&
    css`
      right: 0;
    `}

  width: 30px;
  height: 300.5px;

  > svg {
    width: 100%;
    height: 30px;
    flex-shrink: 0;
    color: #b19dd8;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const CheckIcon = styled(FiCheck)`
  width: 18px;
  height: 18px;
`;
