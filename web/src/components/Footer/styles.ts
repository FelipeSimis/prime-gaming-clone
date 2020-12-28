import styled, { css } from 'styled-components';

import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

export const Container = styled.footer`
  padding: 16px 32px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--footer);
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrapper-img {
    width: 130px;
    height: 100%;

    > img {
      width: 100%;
    }
  }

  .wrapper-info {
    display: flex;
    flex-direction: column;

    @media (min-width: 1100px) {
      margin: 0 20px;
      padding: 0 20px;
      border-left: 1px solid var(--bg-color);
      border-right: 1px solid var(--bg-color);
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 0;

  &:first-child {
    padding-top: 20px;
  }

  > span {
    font-size: 12px;
    color: var(--footer-text);
  }

  @media (min-width: 1100px) {
    justify-content: flex-start;
  }
`;

const iconCSS = css`
  width: 12px;
  height: 12px;
  color: var(--footer-text);
  margin-left: 8px;
`;

export const TwitterIcon = styled(FiTwitter)`
  ${iconCSS}
`;

export const InstagramIcon = styled(FiInstagram)`
  ${iconCSS}
`;

export const FacebookIcon = styled(FiFacebook)`
  ${iconCSS}
`;

export const LegalLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px 0;

  > a {
    font-size: 12px;
    color: var(--lighter);

    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }

    & + a {
      margin-top: 3px;

      @media (min-width: 1100px) {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    a + a {
      margin-left: 10px;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  .amazon-logo {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px 0;
    text-decoration: none;

    .column {
      display: flex;
      flex-direction: column;

      > span {
        font-size: 12px;
        color: var(--footer-text);
      }
    }

    img {
      width: 75px;
      height: 33px;
    }

    &:first-child {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid var(--bg-color);

      @media (min-width: 1100px) {
        padding: 0;
        border: 0;
      }
    }
  }
`;
