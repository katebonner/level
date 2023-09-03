import React from "react";
import { useQuery } from "react-query";
import queryMe from "../../api/queryMe";
import queryValence from "../../api/queryValence";
import { Container, Name, Row } from "./elements";
import SpotifyVisualizer from "../SpotifyVisualizer";
import SpotifyChart from "../Chart";

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

  const USER_DATA = averageFields(valenceData);
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
        <SpotifyChart data={USER_DATA} />
      </Container>

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
