import React from "react";
import { Container, Circle, Circle2, Circle3 } from "./elements";
import User from "../../Components/User/user";
import Top from "../../Components/Top";
import { StaticBackground } from "./elements";
import FadeOverlay from "../../Components/FadeOverlay";

const Intro = () => {
  return (
    <Container>
      <Circle />
      <Circle2 />
      <Circle3 />
      <StaticBackground>
        <Top></Top>
      </StaticBackground>
      <User></User>
      <FadeOverlay />
    </Container>
  );
};

export default Intro;
