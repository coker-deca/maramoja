import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Navbar = () => {
  return (
    <StyledNavBar className="grid">
      <Logo />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  height: 7.4rem;
  background-color: var(--theme-background-color);
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  align-items: center;
`;

export default Navbar;
