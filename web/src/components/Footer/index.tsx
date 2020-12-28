import React, { memo } from 'react';

import {
  Container,
  MainSection,
  Row,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  LegalLinks,
  LogoWrapper,
} from './styles';

import PrimeGaming from '../../assets/prime-gaming.svg';
import Prime from '../../assets/prime.svg';
import Amazon from '../../assets/amazon.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <div className="wrapper-img">
          <img src={PrimeGaming} alt="Prime Gaming" />
        </div>

        <div className="wrapper-info">
          <Row>
            <span>Follow @PrimeGaming</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/PrimeGaming"
            >
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/twitchprime"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/PrimeGaming"
            >
              <FacebookIcon />
            </a>
          </Row>

          <Row>
            <span>©1996-2020, Amazon.com, Inc. or its affiliates</span>
          </Row>

          <LegalLinks>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.com.br/gp/help/customer/display.html?ie=UTF8&nodeId=201283910"
            >
              Conditions of Use
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.com.br/gp/help/customer/display.html?ie=UTF8&nodeId=201283950"
            >
              Privacy Notice
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazongames.com/en-us/support/prime-gaming/gf25r2a8vvfhxtqw"
            >
              Prime Gaming Guide
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gaming.amazon.com/cookie-notice"
            >
              Cookie Notice
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.com.br/gp/help/customer/display.html?ie=UTF8&nodeId=201283970"
            >
              Interest-Based ADS Notice
            </a>
          </LegalLinks>
        </div>

        <LogoWrapper>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.com.br/prime"
            className="amazon-logo"
          >
            <img src={Prime} alt="Prime" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.com.br/"
            className="amazon-logo"
          >
            <div className="column">
              <span>Powered by</span>
              <img src={Amazon} alt="Amazon" />
            </div>
          </a>
        </LogoWrapper>
      </MainSection>
    </Container>
  );
};

export default memo(Footer);
