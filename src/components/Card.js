import { CommentOutlined, RobotFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const Card = ({ content }) => {
  return (
    <CardDiv className="container">
      <div className="empty-card"></div>
      <div className="card">
        <div className="head">
          <div className="calendar">
            <p>28</p>
            <p>Sept</p>
          </div>
          <div className="header">
            <div className="header-title">
              <span style={{ color: "green" }}>VACCINATION</span>
              <span style={{ color: "red" }}>CORONAVIRUS</span>
              <span style={{ color: "blue" }}>TESTING</span>
            </div>
            <div className="meta">
              <div className="meta">
                <RobotFilled /> <span>by Admin</span>
              </div>
              <div className="meta">
                <CommentOutlined /> <span>No Comments</span>
              </div>
            </div>
          </div>
        </div>
        <h4 className="card-title">{content.title}</h4>
        <p className="card-body">{content.details}</p>
      </div>
    </CardDiv>
  );
};

const CardDiv = styled.section`
  border-radius: 5px;
  width: 300px;

  .empty-card {
    width: 100%;
    height: 200px;
    background: #dddddd;
    border-top-right-radius: 5px;
    -moz-border-radius-topright: 5px;
    -webkit-border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -webkit-border-top-left-radius: 5px;
  }

  .card {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    border: none;
    background: white;
    border-bottom-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -webkit-border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    -moz-border-radius-bottomleft: 5px;
    -webkit-border-bottom-left-radius: 5px;
    .card-title {
      margin: 70px 20px 0 20px;
    }
    .card-body {
      font-size: 12px;
      margin: 10px 20px;
      color: #444;
    }
  }

  .head {
    position: relative;

    span {
      text-align: center;
      margin: 2px;
      font-size: 10px;
      font-weight: 600;
    }
  }

  .header {
    position: absolute;
    left: 80px;

    .header-title {
      display: flex;
      margin-bottom: 10px;
    }

    .meta {
      display: flex;
      svg {
        color: #2471fb;
        margin-left: 5px;
      }
    }
  }

  .calendar {
    padding: 20px;
    position: absolute;
    color: white;
    top: -15px;
    width: 30px;
    height: 30px;
    background: #2471fb;
    border-top-right-radius: 5px;
    -moz-border-radius-topright: 5px;
    -webkit-border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -webkit-border-bottom-right-radius: 5px;

    p {
      text-align: center;
      margin: 0;
      font-size: xx-small;
      font-weight: 900;
    }
  }
`;

export default Card;
