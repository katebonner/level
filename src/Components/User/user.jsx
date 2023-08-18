import React from "react";
import { useQuery } from "react-query";
import queryMe from "../../api/queryMe";
import { Link } from "react-router-dom";
import { Container, CalculateButton, Name } from "./elements";
import { Loader } from "../Loader";

const User = () => {
  const { data, isLoading } = useQuery("me", async () => await queryMe());

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Container key={data?.id}>
          <Name className="floating" key={data?.id}>
            {data?.display_name}
          </Name>
          <Link to="/score">
            <CalculateButton>CALCULATE</CalculateButton>
          </Link>
        </Container>
      )}
    </Container>
  );
};

export default User;
