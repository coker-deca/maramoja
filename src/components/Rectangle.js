import React from 'react';
import styled from 'styled-components';

const Rectangle = ({ children }) => {
  return (
    <div>
      <StyledRectangle>{children}</StyledRectangle>
    </div>
  );
};

const StyledRectangle = styled.div`
  display: flex;
  width: 900px;
  color: #000;
  border-radius: 5px;
  margin: 50px 0px;

  a:link {
    color: black;
    text-decoration: none;
    font-size: smaller;
  }

  .center-square {
    background: blue;
    z-index: 2;
    height: 310px;
  }
`;

export default Rectangle;
