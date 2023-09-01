import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Description,
  ValenceButton,
  Circle,
  Circle2,
  Circle3,
} from "./elements";

const Intro = () => {
  return (
    <Container>
      <Circle />
      <Circle2 />
      <Circle3 />
      <Link to="/valence">
        <ValenceButton>PROCEED</ValenceButton>
      </Link>
    </Container>
  );
};

export default Intro;
