import React, { useRef, useEffect } from "react";
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register required components
Chart.register(BarController, CategoryScale, LinearScale, BarElement);

const SpotifyChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const chart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Danceability", "Energy", "Happiness", "Loudness", "Tempo"],
          datasets: [
            {
              label: "Song Attributes",
              data: [
                data.danceability,
                data.energy,
                data.valence,
                Math.abs((60 + data.loudness / 1000) / 0.6),
                data.tempo / 100,
              ],
              backgroundColor: [
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
              ],
              borderColor: [
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.3)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            x: {
              borderCapStyle: "round",
              borderDash: [],
              borderWidth: 2,
              color: "rgba(255,255,255,0.3)",
              beginAtZero: true,
              max: 100,
              ticks: {
                color: "rgba(255,255,255,0.3)",
                font: {
                  size: 18,
                },
              },
              grid: {
                color: "rgba(255,255,255,0.3)",
              },
            },
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                color: "rgba(255,255,255,0.3)",
                font: {
                  size: 18,
                },
              },
              grid: {
                color: "rgba(255,255,255,0.3)",
                borderColor: "rgba(255,255,255,0.3)",
              },
            },
          },
        },
      });

      chartInstanceRef.current = chart;
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="canvas-container">
      <canvas ref={chartRef} width="800" height="500" />
    </div>
  );
};

export default SpotifyChart;
