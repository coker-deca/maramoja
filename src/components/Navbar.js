import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from '../atoms/Menu';
import Search from '../atoms/Search';

const Navbar = () => {
  return (
    <StyledNavBar className="grid">
      <Logo />
      <Menu />
      <Search />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  height: 7.4rem;
  background-color: var(--theme-background-color);
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
