import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSidebar } from '../../hooks/sidebar';

import { Container } from './styles';

interface Props {
  path: string;
  exact?: boolean;
  icon: string;
  alt?: string;
  label: string;
}

const SidebarLink: React.FC<Props> = ({ path, icon, alt, label }) => {
  const { setIsSidebarOpen } = useSidebar();

  return (
    <Container>
      <NavLink
        exact
        to={path}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
        activeClassName="sidebar-link-active"
      >
        <img src={icon} alt={alt} />
        {label}
      </NavLink>
    </Container>
  );
};

export default SidebarLink;
