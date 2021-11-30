import styled from 'styled-components';

const FlexContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-radius: 5px;
  margin: 20px 0;

  .container {
    width: 50%;
    display: block;
  }

  .right {
    div {
      display: flex;
      svg {
        color: white;
        font-size: large;
      }
    }
    img {
      width: 100%;
      height: 250px;
      border-radius: 5px;
      margin-bottom: 25px
    }
    .capsule {
      width: 50%;
    }
    .text {
      display: block;
      font-size: small;
      small {
        font-size: xx-small;
      }
    }
  }
  .left {
    p {
      margin: 0;
    }

    .capsule {
      display: flex;
      .logo {
        width: 20%;
      }
      .text {
        width: 70%;
        h3 {
          margin-top: 0px;
        }
      }
    }

    ul {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }

    svg {
      color: white;
      font-size: x-large;
    }
  }
`;

export default FlexContainer;
