import React from "react";
import { useQuery } from "react-query";
import queryValence from "../../api/queryValence";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

import {
  StaticBackground,
  RelativeForeground,
  Container,
  GridContainer,
} from "./elements";
import Top from "../Top";
import { Loader } from "../Loader";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler);

const ValenceScore = () => {
  const { data, isLoading } = useQuery(
    "valence",
    async () => await queryValence()
  );

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

  const audioFeaturesObj = isLoading
    ? {
        acousticness: 0,
        danceability: 0,
        energy: 0,
        instrumentalness: 0,
        liveness: 0,
        speechiness: 0,
        valence: 0,
      }
    : averageFields(data);

  const audioFeatures = {
    labels: [
      "ACOUSTICNESS",
      "DANCEABILITY",
      "ENERGY",
      "INSTRUMENTALNESS",
      "LIVENESS",
      "SPEECHINESS",
      "HAPPINESS",
    ],
    datasets: [
      {
        data: [
          audioFeaturesObj.acousticness,
          audioFeaturesObj.danceability,
          audioFeaturesObj.energy,
          audioFeaturesObj.instrumentalness,
          audioFeaturesObj.liveness,
          audioFeaturesObj.speechiness,
          audioFeaturesObj.valence,
        ],
        fill: true,
        responsive: true,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgb(255, 255, 255)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderColor: "rgb(255, 255, 255)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#fff",
      },
    ],
  };

  const getFontSize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      return 10;
    } else if (width <= 1024) {
      return 18;
    } else {
      return 20;
    }
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.5)",
        },
        ticks: {
          color: "#fff",
          showLabelBackdrop: false,
          font: {
            size: getFontSize(),
            weight: 600,
          },
        },
        pointLabels: {
          color: "#fff",
          font: {
            size: getFontSize(),
            weight: 600,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "easeInBounce",
        from: 0.6,
        to: 0.3,
        loop: true,
      },
    },
  };

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
          <Container>
            <GridContainer>
              <Radar data={audioFeatures} key={4} options={chartOptions} />
            </GridContainer>
          </Container>
        )}
      </RelativeForeground>
    </>
  );
};

export default ValenceScore;
