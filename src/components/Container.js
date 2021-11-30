import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.bg ? `url(${props.bg})` : props.bgColor ? props.bgColor : "none"};

  header {
    color: blue;
    margin-bottom: 30px;
  }
`;

export default Container;
