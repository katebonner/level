import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Description,
  Quote,
  ValenceButton,
  Circle,
} from "./elements";

const Intro = () => {
  return (
    <Container>
      <Circle />
      <Title className="floating">&#123;valence&#125;</Title>
      <Description>
        Spotify's API provides a 'valence' score, which measures a track's
        happiness level. By accessing your profile and analyzing your recent
        songs, we determine your average happiness score based on your most
        recent music.
      </Description>
      <Link to="/valence">
        <ValenceButton>ACCESS</ValenceButton>
      </Link>
    </Container>
  );
};

export default Intro;
