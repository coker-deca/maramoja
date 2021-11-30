import React from 'react';
import styled from 'styled-components';

const Square = ({ children }) => {
  return <StyledSquare>{children}</StyledSquare>;
};

const StyledSquare = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 5px;
  box-shadow: 0 0 20px grey;
  padding: 50px;

  .content {
    display: flex;
    color: lightblue;

    h1 {
      display: inline-block;
      border-right: 1px solid black;
      height: fit-content;
      line-height: 1.5rem;
      padding-right: 10px;
    }

    .title {
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      margin: 20px;
      color: #000;
    }

    .detail {
      font-size: x-small;
      margin: 20px;
      color: #000;
    }
  }

  .center-square {
    background: blue;
    z-index: 2;
    height: 310px;
  }
`;

export default Square;
