import React from "react";
import { useQuery } from "react-query";
import queryMe from "../../api/queryMe";
import queryValence from "../../api/queryValence";
import {
  Container,
  Name,
  Row,
  Description,
  Section,
  SectionText,
  Result,
  SectionContainer,
} from "./elements";
import SpotifyVisualizer from "../SpotifyVisualizer";
import SpotifyChart from "../Chart";
import ProgressBar from "../Bar";

const User = () => {
  const { data: userData, isLoading: userLoading } = useQuery(
    "me",
    async () => await queryMe()
  );

  const { data: valenceData, isLoading: valenceLoading } = useQuery(
    ["valence", userData],
    async () => {
      if (userData) {
        // Make sure userData is available before querying for valence
        return await queryValence();
      }
    },
    {
      enabled: !!userData, // Only run the query if userData is available
    }
  );

  if (userLoading || valenceLoading) {
    return null;
  }

  const averageFields = (arr) => {
    // Check if the input array is empty
    if (arr.length === 0) {
      return {};
    }
    // Sum up all values for each field
    const total = arr.reduce((acc, obj) => {
      for (let key in obj) {
        if (acc[key]) {
          acc[key] += obj[key];
        } else {
          acc[key] = obj[key];
        }
      }
      return acc;
    }, {});

    // Divide the sum of each field by the number of objects in the array
    // and then apply Math.floor() to the results
    for (let key in total) {
      total[key] = Math.floor((total[key] / arr.length) * 100);
    }
    return total;
  };

  let USER_DATA = averageFields(valenceData);
  USER_DATA = {
    ...USER_DATA,
    ["loudness"]: Math.floor((60 + USER_DATA.loudness / 1000) / 0.6),
  };

  const VALENCE_MAX = {
    ...USER_DATA,
    ["valence"]: 100,
  };
  const VALENCE_MIN = {
    ...USER_DATA,
    ["valence"]: 0,
  };

  const DANCEABILITY_MAX = {
    ...USER_DATA,
    ["danceability"]: 100,
  };
  const DANCEABILITY_MIN = {
    ...USER_DATA,
    ["danceability"]: 0,
  };

  const ENERGY_MAX = {
    ...USER_DATA,
    ["energy"]: 100,
  };
  const ENERGY_MIN = {
    ...USER_DATA,
    ["energy"]: 1,
  };

  const LOUDNESS_MAX = {
    ...USER_DATA,
    ["loudness"]: 999,
  };
  const LOUDNESS_MIN = {
    ...USER_DATA,
    ["loudness"]: -999,
  };

  const TEMPO_MAX = {
    ...USER_DATA,
    ["tempo"]: 50000,
  };
  const TEMPO_MIN = {
    ...USER_DATA,
    ["tempo"]: 0,
  };

  console.log(USER_DATA);

  return (
    <Container>
      {USER_DATA && <SpotifyVisualizer data={USER_DATA} />}
      <Container key={userData?.id}>
        <Name key={userData?.id}>{userData?.display_name.toUpperCase()}</Name>
        <Description>SCROLL TO VIEW YOUR SPOTIFY STATS</Description>
        {/* <SpotifyChart data={USER_DATA} /> */}
      </Container>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          <Row>
            <SectionContainer>
              <Section>😊 HAPPINESS</Section>
              <Result>{USER_DATA.valence}%</Result>
              <ProgressBar progress={USER_DATA.valence} />
              <SectionText>
                happiness gives your sprial its color. the more positive your
                top spotify track, the more yellow. the more negative the
                tracks, the more pink.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <Section>🕺🏾 DANCEABILITY</Section>
              <Result>{USER_DATA.danceability}%</Result>
              <ProgressBar progress={USER_DATA.danceability} />
              <SectionText>
                danceability gives your spiral its thickness. the dancibility of
                your tracks is determined by tempo, rhythm stability, beat
                strength, and overall regularity.
              </SectionText>
            </SectionContainer>
          </Row>
          <Row>
            <SectionContainer>
              <Section>⚡ ENERGY</Section>
              <Result>{USER_DATA.energy}%</Result>
              <ProgressBar progress={USER_DATA.energy} />
              <SectionText>
                energy gives your spiral its rotation speed. energy represents a
                perceptual measure of intensity and activity.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <Section>🔊 LOUDNESS</Section>
              <Result>{USER_DATA.loudness}%</Result>
              <ProgressBar progress={USER_DATA.loudness} />
              <SectionText>
                loudness gives your spiral its size. loudness is the quality of
                a sound that is the primary psychological correlate of strength
                (amplitude).
              </SectionText>
            </SectionContainer>
          </Row>
          <Row>
            <SectionContainer>
              <Section>🎙️LIVENESS</Section>
              <Result>{USER_DATA.liveness}%</Result>
              <ProgressBar progress={USER_DATA.liveness} />
              <SectionText>
                liveness gives your spiral its degree of reduced rotation speed
                (how much it slows down) on hover. liveness detects the presence
                of an audience in your top tracks (that the recording was
                performed live).
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <Section>🎹 INSTRUMENTALNESS</Section>
              <Result>{USER_DATA.instrumentalness}%</Result>
              <ProgressBar progress={USER_DATA.instrumentalness} />
              <SectionText>
                instrumentalness gives your spiral its shine. instrumentalness
                predicts whether your tracks contains no vocals. "ooh" and "ahh"
                sounds are treated as instrumental in this context. rap or
                spoken word tracks are vocal.
              </SectionText>
            </SectionContainer>
          </Row>
        </div>
      </div>

      {/* <Row>
        {VALENCE_MIN && <SpotifyVisualizer data={VALENCE_MIN} size={50} />}
        {VALENCE_MAX && <SpotifyVisualizer data={VALENCE_MAX} size={50} />}
      </Row> */}
      {/* <Row>
        {VALENCE_MIN && <SpotifyVisualizer data={DANCEABILITY_MIN} size={50} />}
        {VALENCE_MAX && <SpotifyVisualizer data={DANCEABILITY_MAX} size={50} />}
      </Row>
      <Row>
        {VALENCE_MIN && <SpotifyVisualizer data={ENERGY_MIN} size={50} />}
        {VALENCE_MAX && <SpotifyVisualizer data={ENERGY_MAX} size={50} />}
      </Row>
      <Row>
        {VALENCE_MIN && <SpotifyVisualizer data={LOUDNESS_MIN} size={50} />}
        {VALENCE_MAX && <SpotifyVisualizer data={LOUDNESS_MAX} size={50} />}
      </Row>
      <Row>
        {VALENCE_MIN && <SpotifyVisualizer data={TEMPO_MIN} size={50} />}
        {VALENCE_MAX && <SpotifyVisualizer data={TEMPO_MAX} size={50} />}
      </Row> */}
    </Container>
  );
};

export default User;
