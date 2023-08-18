import React from "react";
import { useQuery } from "react-query";
import queryValence from "../../api/queryValence";
import { Chart, ArcElement } from "chart.js";
import {
  StaticBackground,
  RelativeForeground,
  DataPoint,
  AverageLine,
  Right,
  Results,
  Emoji,
  Padding,
  Pink,
  Container,
} from "./elements";
import Top from "../Top";
import { Loader } from "../Loader";

Chart.register(ArcElement);

const ValenceScore = () => {
  const natAvg = 46;
  const { data, isLoading } = useQuery(
    "valence",
    async () => await queryValence()
  );
  var difference = Math.abs(natAvg - data);
  const Case = {
    BelowAvg: {
      emoji: "🥲",
      text: `YOUR VALENCE LEVEL IS ${data}% — WHICH IS ${difference}% LOWER THAN`,
    },
    Avg: {
      emoji: "😊",
      text: `YOUR VALENCE LEVEL IS ${data}% — WHICH IS`,
    },
    AboveAvg: {
      emoji: "🤠",
      text: `YOUR VALENCE LEVEL IS ${data}% — WHICH IS ${difference}% HIGHER THAN`,
    },
  };

  let userCase;

  if (data < natAvg) {
    userCase = Case.BelowAvg;
  } else if (data === natAvg) {
    userCase = Case.Avg;
  } else {
    userCase = Case.AboveAvg;
  }

  return (
    <>
      <StaticBackground>
        <Top />
      </StaticBackground>
      <RelativeForeground>
        {isLoading ? (
          <Container>
            <Loader />
          </Container>
        ) : (
          <>
            <AverageLine averageValue={natAvg * 8}>
              <Pink>AVERAGE.</Pink>
            </AverageLine>
            <Padding>
              <Results averageValue={natAvg * 8}>{userCase.text}</Results>
              <Right>
                <DataPoint className="floating" value={data * 8}>
                  <Emoji>{userCase.emoji}</Emoji>
                </DataPoint>
              </Right>
            </Padding>
          </>
        )}
      </RelativeForeground>
    </>
  );
};

export default ValenceScore;
