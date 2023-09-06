import React from "react";
import { useQuery } from "react-query";
import queryMe from "../../api/queryMe";
import queryValence from "../../api/queryValence";
import {
  Name,
  Row,
  Description,
  Section,
  SectionText,
  RowFixed,
  SectionContainer,
  AbsolutePosition,
  ScoreContainer,
} from "./elements";
import SpotifyVisualizer from "../SpotifyVisualizer";
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
    ["loudness"]: Math.floor((50 + USER_DATA.loudness / 1000) / 0.6),
  };

  return (
    <>
      {USER_DATA && <SpotifyVisualizer data={USER_DATA} />}
      <AbsolutePosition>
        <div>
          <div style={{ width: "80vw", marginTop: "20vh" }}>
            <Name key={userData?.id}>
              {userData?.display_name.toUpperCase()}
            </Name>
            <Description>TOP SPOTIFY TRACK STATISTICS</Description>
          </div>
          <ScoreContainer>
            <RowFixed>
              <Section>HAPPINESS: {USER_DATA.valence}% </Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.valence} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>DANCEABILITY: {USER_DATA.danceability}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.danceability} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>ENERGY: {USER_DATA.energy}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.energy} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>LOUDNESS: {USER_DATA.loudness}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.loudness} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>LIVENESS: {USER_DATA.liveness}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.liveness} />
              </div>
            </RowFixed>
            <RowFixed>
              <Section>INSTRUMENTALNESS: {USER_DATA.instrumentalness}%</Section>
              <div style={{ width: "40%" }}>
                <ProgressBar progress={USER_DATA.instrumentalness} />
              </div>
            </RowFixed>
          </ScoreContainer>
        </div>
        <div style={{ margin: "5% 0" }}>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Section>HAPPINESS</Section>
              </RowFixed>
              <SectionText>
                happiness gives your sprial its color. the more positive your
                top spotify track, the more yellow. the more negative the
                tracks, the more pink.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Section>DANCEABILITY</Section>
              </RowFixed>

              <SectionText>
                danceability gives your spiral its thickness. the dancibility of
                your tracks is determined by tempo, rhythm stability, beat
                strength, and overall regularity.
              </SectionText>
            </SectionContainer>
          </Row>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Section>ENERGY</Section>
              </RowFixed>

              <SectionText>
                energy gives your spiral its rotation speed. energy represents a
                perceptual measure of intensity and activity.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Section>LOUDNESS</Section>
              </RowFixed>
              <SectionText>
                loudness gives your spiral its size. loudness is the quality of
                a sound that is the primary psychological correlate of strength
                (amplitude).
              </SectionText>
            </SectionContainer>
          </Row>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Section>LIVENESS</Section>
              </RowFixed>
              <SectionText>
                liveness gives your spiral its degree of reduced rotation speed
                (how much it slows down) on hover. liveness detects the presence
                of an audience in your top tracks (that the recording was
                performed live).
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Section>INSTRUMENTALNESS</Section>
              </RowFixed>
              <SectionText>
                instrumentalness gives your spiral its shine. instrumentalness
                predicts whether your tracks contains no vocals. "ooh" and "ahh"
                sounds are treated as instrumental in this context. rap or
                spoken word tracks are vocal.
              </SectionText>
            </SectionContainer>
          </Row>
        </div>
      </AbsolutePosition>
      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <RowFixed>
            <Section>HAPPINESS</Section>
            <div style={{ width: "40%" }}>
              <ProgressBar progress={USER_DATA.valence} />
            </div>
          </RowFixed>
          <RowFixed>
            <Section>DANCEABILITY</Section>
            <div style={{ width: "40%" }}>
              <ProgressBar progress={USER_DATA.danceability} />
            </div>
          </RowFixed>
          <RowFixed>
            <Section>ENERGY</Section>
            <div style={{ width: "40%" }}>
              <ProgressBar progress={USER_DATA.energy} />
            </div>
          </RowFixed>
          <RowFixed>
            <Section>LOUDNESS</Section>
            <div style={{ width: "40%" }}>
              <ProgressBar progress={USER_DATA.loudness} />
            </div>
          </RowFixed>
          <RowFixed>
            <Section>LIVENESS</Section>
            <div style={{ width: "40%" }}>
              <ProgressBar progress={USER_DATA.liveness} />
            </div>
          </RowFixed>
          <RowFixed>
            <Section>INSTRUMENTALNESS</Section>
            <div style={{ width: "40%" }}>
              <ProgressBar progress={USER_DATA.instrumentalness} />
            </div>
          </RowFixed>
        </div>
        <div style={{ width: "80%" }}>
          <Row>
            <SectionContainer>
              <RowFixed>
                <Icon>😊</Icon>
                <Section>HAPPINESS</Section>
              </RowFixed>

              <Result>{USER_DATA.valence}%</Result>
              <ProgressBar progress={USER_DATA.valence} />

              <SectionText>
                happiness gives your sprial its color. the more positive your
                top spotify track, the more yellow. the more negative the
                tracks, the more pink.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Icon>🕺🏾</Icon>
                <Section>DANCEABILITY</Section>
              </RowFixed>
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
              <RowFixed>
                <Icon>⚡</Icon>
                <Section>ENERGY</Section>
              </RowFixed>
              <Result>{USER_DATA.energy}%</Result>
              <ProgressBar progress={USER_DATA.energy} />
              <SectionText>
                energy gives your spiral its rotation speed. energy represents a
                perceptual measure of intensity and activity.
              </SectionText>
            </SectionContainer>
            <SectionContainer>
              <RowFixed>
                <Icon>🔊</Icon>
                <Section>LOUDNESS</Section>
              </RowFixed>

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
              <RowFixed>
                <Icon>🎙️</Icon>
                <Section>LIVENESS</Section>
              </RowFixed>

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
              <RowFixed>
                <Icon>🎹</Icon>
                <Section>INSTRUMENTALNESS</Section>
              </RowFixed>

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
      </div> */}
    </>
  );
};

export default User;
