import styled, { css } from 'styled-components';

import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineRight, AiOutlineLogout } from 'react-icons/ai';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  grid-area: sidebar;
  width: 100%;
  height: 100%;

  transition: left 0.4s ease;

  position: fixed;
  top: 0;
  left: -100%;
  z-index: 9999;

  ${props =>
    props.isOpen &&
    css`
      left: 0;
    `}

  overflow: hidden;
  background: var(--sidebar);

  @media (min-width: 580px) {
    width: 256px;
  }

  @media (min-width: 1100px) {
    left: 0;
  }
`;

export const MenuIcon = styled(HiOutlineMenu)`
  width: 20px;
  height: 20px;
  margin: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s;

  position: sticky;
  z-index: 10;

  &:hover,
  &:focus {
    box-shadow: -1px 0px 10x -1px rgba(255, 255, 255, 0.78);
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const CloseIcon = styled(RiCloseLine)`
  width: 30px;
  height: 30px;
  color: var(--lighter);
  cursor: pointer;

  position: absolute;
  top: 12px;
  right: 12px;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  padding: 24px 24px 16px;

  display: flex;
  flex-direction: column;

  > img {
    width: 130px;
    height: 30px;
  }

  > button {
    display: flex;
    align-items: center;

    margin: 20px 0 30px;

    > span {
      font-size: 12px;
      color: var(--gray);
      margin-left: 8px;
      white-space: nowrap;
    }

    &:hover,
    &:focus {
      > span {
        color: var(--white);
      }

      > svg {
        fill: var(--white);
      }
    }

    + div {
      top: 110px;
      left: 20px;
    }
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0 20px 24px;

  > p {
    font-size: 14px;
    color: var(--lighter);
  }

  > button {
    width: min-content;
    display: flex;
    align-items: center;

    margin-top: 8px;

    > span {
      margin: 0 4px;
      font-size: 12px;
      color: var(--white);
    }
  }
`;

export const TwitchImage = styled.img`
  width: 15px;
  height: 18px;
`;

export const ArrowRightIcon = styled(AiOutlineRight)`
  width: 20px;
  height: 20px;
`;

const iconCSS = css`
  width: 18px;
  height: 16px;
  fill: var(--lighter);
  margin-right: 8px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  > .loggout {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    border-top: 2px solid var(--border-color);
    border-bottom: 2px solid var(--border-color);

    @media (min-width: 1280px) {
      height: 65px;
    }

    > span {
      width: 8px;
      height: 100%;
      background: var(--blue);
      box-shadow: 0 0 1.6rem 0 rgba(6, 104, 138, 0.72);
    }

    > a {
      width: 100%;
      display: flex;
      align-items: center;

      padding: 16px;

      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      color: var(--lighter);

      > img {
        ${iconCSS}
      }
    }

    transition: background 0.2s;

    &:hover,
    &:focus {
      background: linear-gradient(
        -134deg,
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 97%
      ) !important;
    }

    &:hover,
    &.active {
      padding-left: 0 !important;

      > span {
        display: block !important;
      }
    }

    &:hover {
      > span {
        background-color: var(--blue-dark);
      }
    }

    &:not(.active) {
      padding-left: 8px;

      > span {
        display: none;
      }
    }
  }
`;

export const SignOutIcon = styled(AiOutlineLogout)`
  ${iconCSS}
`;
