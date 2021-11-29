import React from 'react';
import styled from 'styled-components';

const menuData = [
  { name: "Home", submenus: ["Home Submenu"] },
  { name: "About" },
  { name: "Services" },
  { name: "Pages", submenus: ["Page 1", "Page 2"] },
  { name: "News", submenus: ["News 1", "News 2"] },
  { name: "Contact" },
];

const Menu = () => {
  return (
    <StyledMenu>
      {menuData.map((item) => <StyledLi>{item.name}</StyledLi>)}
    </StyledMenu>
  );
};

const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const StyledLi = styled.li`
    padding: 0;
    margin: 10px;
    
`;

export default Menu;
