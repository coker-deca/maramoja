import { RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import Button from './atoms/Button';
import Details from './atoms/Details';
import Text from './atoms/Text';
import Title from './atoms/Title';
import Container from './components/Container';
import Rectangle from './components/Rectangle';
import Skeleton from './components/Skeleton';
import Square from './components/Square';
import Wrapper from './components/Wrapper';
import background from './resources/top-bg.png';

// import Hero from "../components/Hero";
// import HomeContents from "../components/HomeContents";

const videoUrl = "https://www.fakevideo.com";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
const squares = [
  {
    id: 1,
    title: "Sign Up for Free",
    details: text,
    button: "Sign Up",
  },
  {
    id: 2,
    title: "Book a Service",
    details: text,
    button: "Choose the Service",
  },
  {
    id: 3,
    title: "Start your Visit",
    details: text,
    button: "Read More About",
  },
];

const vaccinatedSquares = [
  {
    id: 1,
    title: "Why should I get vaccinated for COVID-19 ?",
    details: text,
    button: "Sign Up",
  },
  {
    id: 2,
    title: "What are the differences between COVID vaccines ?",
    details: text,
    button: "Choose the Service",
  },
  {
    id: 3,
    title: "How do I get a COVID-19 vaccine ?",
    details: text,
    button: "Read More About",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <Skeleton />}
      {!loading && (
        <>
          <Container bgColor={background}>
            <header>
              <Title>
                <h1>FAQ</h1>
              </Title>
              Home/Pages/FAQ
            </header>
          </Container>
          <Container>
            <Wrapper>
              <Text>
                Going Universal: Get Help as Easy as <br /> One, Two, Three
              </Text>
              <Rectangle>
                {squares.map((item) => (
                  <Square>
                    <div className="content">
                      <h1>{item.id}</h1>
                      <div>
                        <div className="title">{item.title}</div>
                        <div className="detail">{item.details}</div>
                      </div>
                    </div>
                    <Button>{item.button}</Button>
                  </Square>
                ))}
              </Rectangle>
              <Rectangle>
                {/* <video src={videoUrl} autoPlay={false} loop /> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "500px",
                    width: "100%",
                    backgroundColor: "lightgrey",
                    borderRadius: "5px",
                  }}
                >
                  <image
                    alt="Play"
                    src="./resources/play_icon.svg"
                    width="64"
                    height="64"
                  />
                </div>
              </Rectangle>
              <Container>
                <Text>Discover why Our Patients Love Us</Text>
                <Details>{text}</Details>
              </Container>
              <Rectangle>
                {vaccinatedSquares.map((item) => (
                  <Square size={"smaller"}>
                    <div className="content">
                      <div>
                        <div className="title">{item.title}</div>
                        <div className="detail">{item.details}</div>
                      </div>
                    </div>
                    <Container>
                      <a href="#">
                        Read More{" "}
                        <RightOutlined
                          style={{
                            fontWeight: "600",
                            fontSize: "x-small",
                            color: "blue",
                          }}
                        />
                      </a>
                    </Container>
                  </Square>
                ))}
              </Rectangle>
            </Wrapper>
          </Container>
        </>
      )}
      {/* <HomeContents /> */}
    </>
  );
};

export default Home;
