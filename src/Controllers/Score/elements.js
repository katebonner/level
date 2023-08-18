import styled from "@emotion/styled";

export const DataPoint = styled.div(({ value }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "blue", // or any color you like
  position: "absolute",
  bottom: 0, // starting from the bottom of the container
  top: `calc(100% - ${value}px)`, // this pushes the circle up by the data value
}));
