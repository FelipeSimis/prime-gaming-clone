import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSidebar } from '../../hooks/sidebar';

import {
  Container,
  MenuIcon,
  CloseIcon,
  LogoWrapper,
  Presentation,
  TwitchImage,
  ArrowRightIcon,
  Links,
  SignOutIcon,
} from './styles';

import PrimeGaming from '../../assets/prime-gaming.svg';
import SquareIcon from '../../assets/square.svg';
import TwLogo from '../../assets/tw-logo.svg';

import SidebarLink from '../SidebarLink';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen, handleSidebar } = useSidebar();

  useEffect(() => {
    const body = document.querySelector('body');

    if (isSidebarOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <>
      <MenuIcon onClick={handleSidebar} />

      <Container isOpen={isSidebarOpen}>
        <CloseIcon onClick={handleSidebar} />

        <LogoWrapper>
          <img src={PrimeGaming} alt="Prime Gaming" />

          <button type="button">
            <span>Twitch Prime is now Prime Gaming</span>
          </button>
        </LogoWrapper>

        <Presentation>
          <p>Hello, John</p>

          <button type="button">
            <TwitchImage src={TwLogo} alt="Twitch" />
            <span>john_doe</span>
            <ArrowRightIcon />
          </button>
        </Presentation>

        <Links>
          <SidebarLink
            exact
            path="/"
            icon={SquareIcon}
            alt="More icon"
            label="Games and Loot"
          />

          <SidebarLink
            path="prime"
            icon={SquareIcon}
            alt="More icon"
            label="More from prime"
          />

          <div className="loggout">
            <span />
            <Link
              to="/"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              <SignOutIcon />
              Sign Out
            </Link>
          </div>
        </Links>
      </Container>
    </>
  );
};

export default memo(Sidebar);
