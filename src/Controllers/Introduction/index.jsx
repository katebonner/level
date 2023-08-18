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
      <Title className="floating">VALENCE</Title>
      <Description>
        Spotify's API has a happiness measurement called valence. It is assigned
        to every track in their collection and lives on a scale from 0.0 to 1.0.
      </Description>
      <Quote>
        "Tracks with high valence sound more positive (e.g. happy, cheerful,
        euphoric), while tracks with low valence sound more negative (e.g. sad,
        depressed, angry)."
      </Quote>

      <Link to="/valence">
        <ValenceButton>LOAD PROFILE</ValenceButton>
      </Link>
    </Container>
  );
};

export default Intro;
