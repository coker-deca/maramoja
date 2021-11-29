import styled from 'styled-components';

export const Circle = ({ children }) => {
  return <StyledCircle>{children}</StyledCircle>;
};

const StyledCircle = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  box-shadow: 3px 3px 3px lightgrey;
  margin: 20px;
  padding: 8px;
`;
