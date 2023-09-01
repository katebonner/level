import React from "react";
import { useQuery } from "react-query";
import queryMe from "../../api/queryMe";
import queryValence from "../../api/queryValence";
import { Container, Name, Row } from "./elements";
import SpotifyVisualizer from "../SpotifyVisualizer";

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
    for (let key in total) {
      total[key] = (total[key] / arr.length) * 100;
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

  console.log(VALENCE_MIN);

  return (
    <Container>
      {valenceData && <SpotifyVisualizer data={USER_DATA} />}
      <Row>
        {valenceData && <SpotifyVisualizer data={VALENCE_MIN} size={50} />}
        {valenceData && <SpotifyVisualizer data={VALENCE_MAX} size={50} />}
      </Row>
      <Container key={userData?.id}>
        <Name key={userData?.id}>{userData?.display_name.toUpperCase()}</Name>
      </Container>
    </Container>
  );
};

export default User;
