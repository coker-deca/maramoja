import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import { Circle } from './Circle';

const Search = () => {
  return (
    <StyledSearch>
      <Circle>
        <SearchOutlined />
      </Circle>
      <Button>my account</Button>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Search;
