import React from "react";
import { Container, SpotifyFrame } from "./elements";

const NoMatch = () => {
  return (
    <Container>
      <SpotifyFrame>
        <iframe
          src="https://open.spotify.com/embed/track/2rdzxFb0MGJeZXO0ymVDD7?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="error404"
        ></iframe>
      </SpotifyFrame>
    </Container>
  );
};

export default NoMatch;
