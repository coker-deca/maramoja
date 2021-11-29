import React, { useState } from 'react';

import Text from './atoms/Text';
import Title from './atoms/Title';
import Container from './components/Container';
import Skeleton from './components/Skeleton';
import Wrapper from './components/Wrapper';
import background from './resources/top-bg.png';

// import Hero from "../components/Hero";
// import HomeContents from "../components/HomeContents";

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
              <div>
                <Square></Square>
              </div>
            </Wrapper>
          </Container>
        </>
      )}
      {/* <HomeContents /> */}
    </>
  );
};

export default Home;
