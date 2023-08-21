import React from "react";
import SpotifyAuth from "../../spotify/auth";
import { Circle, Description, Quote, Logo, ConnectButton } from "./elements";

const Landing = () => {
  const spotifyAuth = SpotifyAuth();

  return (
    <>
      <Circle />
      <Logo className="floating center">level</Logo>
      <div className="container">
        <Description>
          A portrait of your sound: Dissect the audio features of your top 50
          tracks on Spotify and discover what truly resonates with you.
        </Description>
        <ConnectButton>
          <a
            className="bold"
            href={`${spotifyAuth.AUTH_ENDPOINT}?client_id=${spotifyAuth.CLIENT_ID}&redirect_uri=${spotifyAuth.REDIRECT_URI}&response_type=${spotifyAuth.RESPONSE_TYPE}&scope=${spotifyAuth.SCOPE}`}
          >
            CONNECT TO SPOTIFY
          </a>
        </ConnectButton>
      </div>
    </>
  );
};

export default Landing;
