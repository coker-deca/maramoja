import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.bgColor ? `url(${props.bgColor})` : "none")};
  margin: 30px;

  header {
    color: blue;
    margin-bottom: 30px;
  }
`;

export default Container;
