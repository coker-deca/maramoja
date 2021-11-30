import {
  EnvironmentFilled,
  MailFilled,
  PhoneFilled,
  RightOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  RedditCircleFilled,
  WeiboCircleFilled,
  PropertySafetyFilled,
  ProjectFilled,
} from "@ant-design/icons";
import React, { useState } from 'react';

import Button from './atoms/Button';
import Details from './atoms/Details';
import Text from './atoms/Text';
import Title from './atoms/Title';
import Accordion from './components/Accordion';
import Card from './components/Card';
import Container from './components/Container';
import FlexContainer from './components/FlexContainer';
import Logo from './components/Logo';
import Rectangle from './components/Rectangle';
import Skeleton from './components/Skeleton';
import SocialBox from "./components/SocialBox";
import Square from './components/Square';
import Wrapper from './components/Wrapper';
import triangles from './resources/large-triangles.svg';
import map from './resources/map.png';
import background from './resources/top-bg.png';

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

const latestNews = [
  {
    id: 1,
    title: "Multiple Reasons Behind the Sars-Cov-2 surge",
    details: text,
  },
  {
    id: 2,
    title: "Tumor Targeting by Test antibody-based Sars and Research",
    details: text,
  },
  {
    id: 3,
    title: "Insurers Continue to target Emergency Medicine",
    details: text,
  },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <Skeleton />}
      {!loading && (
        <>
          <Container bg={background}>
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
              <Container>
                <Accordion title="What are the most common side-effects of getting the vaccine?">
                  {text}
                </Accordion>
                <Accordion title="When will vaccination be available to me?">
                  {text}
                </Accordion>
                <Accordion title="Can I choose which vaccine I get?">
                  {text}
                </Accordion>
                <Accordion title="When will vaccination be available to me?">
                  {text}
                </Accordion>
                <Accordion title="Do I still need to where mask and socially distance after getting the vaccine?">
                  {text}
                </Accordion>
                <Accordion title="Do I still need to where mask and socially distance after getting the vaccine?">
                  {text}
                </Accordion>
                <Accordion title="When should I need another vaccine after taking my complete dose?">
                  {text}
                </Accordion>
                <Accordion title="When should I need another vaccine after taking my complete dose?">
                  {text}
                </Accordion>
              </Container>
            </Wrapper>
          </Container>
          <Container bgColor="#E8F2FF">
            <Text>Latest News</Text>
            <Wrapper>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {latestNews.map((item) => (
                  <Card content={item} />
                ))}
              </div>
            </Wrapper>
          </Container>
          <Container bg={triangles}>
            <Wrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "5px",
                  marginTop: "-20px",
                  marginBottom: "20px",
                }}
              >
                <h4 style={{ margin: 0 }}>
                  Stay updated on our latest news and medical guidness
                </h4>
                <input
                  style={{
                    width: "50%",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    marginRight: "10px",
                  }}
                />
                <Button>Subscribe</Button>
              </div>
              <FlexContainer>
                <div className="container left">
                  <Logo />
                  <p>{text}</p>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">News</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Services</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                  <div className="capsule">
                    <PhoneFilled className="logo" />
                    <div className="text">
                      <h3>+1-733-5582-795</h3>
                      <small>Emergency Hotline 24/7</small>
                    </div>
                  </div>
                </div>
                <div className="container right">
                  <img src={map} />
                  <div className="left">
                    <div className="capsule">
                      <EnvironmentFilled className="logo" />
                      <div className="text">
                        <small>Head Office Location:</small>
                        <p>9873 Ridgewood Lane, Elgin, IL, USA</p>
                      </div>
                    </div>
                    <div className="capsule">
                      <MailFilled className="logo" />
                      <div className="text">
                        <small>Contact and Feedback: </small>
                        <p>vaxiemal@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FlexContainer>
              <hr />
              <SocialBox>
                <FacebookFilled />
                <TwitterCircleFilled />
                <YoutubeFilled />
                <RedditCircleFilled />
                <WeiboCircleFilled />
                <PropertySafetyFilled />
                <ProjectFilled />
              </SocialBox>
            </Wrapper>
          </Container>
        </>
      )}
      {/* <HomeContents /> */}
    </>
  );
};

export default Home;
