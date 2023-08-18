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
  Valence,
  Emoji,
  Padding,
  Pink,
} from "./elements";
import Top from "../Top";

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
      text: `YOUR VALENCE LEVEL IS ${difference}% LOWER THAN`,
    },
    Avg: {
      emoji: "😊",
      text: `YOUR VALENCE LEVEL IS`,
    },
    AboveAvg: {
      emoji: "🤠",
      text: `YOUR VALENCE LEVEL IS ${difference}% HIGHER THAN`,
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
        <AverageLine averageValue={natAvg * 8}>
          <Pink>AVERAGE.</Pink>
        </AverageLine>
        {!isLoading && (
          <Padding>
            <Results averageValue={natAvg * 8}>{userCase.text}</Results>
            <Right>
              <DataPoint className="floating" value={data * 8}>
                <Emoji>{userCase.emoji}</Emoji>
              </DataPoint>
            </Right>
          </Padding>
        )}
      </RelativeForeground>
    </>
  );
};

export default ValenceScore;
