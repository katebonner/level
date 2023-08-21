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
      <Description>
        By using this platform, you grant us access to certain information from
        your Spotify profile. We assure all users that your data will only be
        used for the specified purpose of analyzing your top tracks and will
        never be used in a manner that may cause you harm, be it directly or
        indirectly. We do not sell, distribute, or otherwise misuse your data.
        Our priority is to respect your personal information and musical
        preferences at all times.
      </Description>
      <Link to="/valence">
        <ValenceButton>PROCEED</ValenceButton>
      </Link>
    </Container>
  );
};

export default Intro;
