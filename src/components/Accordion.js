import React, { useState } from 'react';
import styled from 'styled-components';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionWrapper className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  & + * {
    margin-top: 0px;
    :last-child{
      margin-bottom: 70px;
    }
  }

  .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
  }

  .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }

  .accordion-title {
    height: 50px;
    font-weight: 700;
    font-size: small;
    cursor: pointer;
    color: #2471fb;
    padding: 0.5em 2em;
    border-radius: 5px;
    box-shadow: 0 0 5px lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid currentColor;
    }

    &:hover,
    &.open {
      color: black;
    }

    &.open {
      &::after {
        content: "";
        border-top: 0;
        border-bottom: 5px solid;
      }
    }
  }

  .accordion-content {
    padding: 1em 1.5em;
  }
`;

export default Accordion;
