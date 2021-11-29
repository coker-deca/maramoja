import React from "react";
import styled from "styled-components";

const Button = ({ children, className, onClick, active, color }) => {
  return (
    <StyledButton
        color={color}
      className={`${active ? "active" : ""} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 1rem;
  background-color: ${(props) => (props.color ? props.color : "blue")};
  border: 1px solid var(--theme-color-white);
  color: var(--theme-color-white);
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  &:hover {
    background-color: var(--hover-color);
  }
  &.active {
    background-color: var(--theme-color-white);
    color: var(--theme-background-color);
  }
`;

export default Button;
