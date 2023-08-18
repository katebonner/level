import React from "react";
import { useQuery } from "react-query";
import queryMe from "../../api/queryMe";
import { Link } from "react-router-dom";
import { Container, CalculateButton, Name } from "./elements";

const User = () => {
  const { data, isLoading } = useQuery("me", async () => await queryMe());

  return (
    <Container>
      {!isLoading && (
        <Container key={data?.id}>
          <Name className="floating" key={data?.id}>
            {data?.display_name}
          </Name>
          <Link to="/score">
            <CalculateButton>CALCULATE VALENCE</CalculateButton>
          </Link>
        </Container>
      )}
    </Container>
  );
};

export default User;
