import React from "react";
import User from "../../Components/User/user";
import Top from "../../Components/Top";
import { StaticBackground } from "./elements";

const Valence = () => {
  return (
    <>
      <StaticBackground>
        <Top></Top>
      </StaticBackground>
      <User></User>
    </>
  );
};

export default Valence;
