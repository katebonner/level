import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
});

export const GridContainer = styled.div({
  width: "60%",
  "@media (max-width: 900px)": {
    width: "95%",
  },
});

export const StaticBackground = styled.div({
  position: "fixed",
});

export const RelativeForeground = styled.div({
  position: "relative",
});

export const Right = styled.div({
  display: "flex",
  alignItems: "center",
  height: "100vh",
  justifyContent: "center",
});

export const Padding = styled.div({
  padding: "0 36px",
});

export const DataPoint = styled.div(({ value }) => ({
  position: "absolute",
  top: `calc(100% - ${value}px - 10vh)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Emoji = styled.div({
  fontSize: "10vw",
  opacity: 0.7,
  "@media (max-width: 900px)": {
    fontSize: "25vw",
  },
});

export const AverageLine = styled.div(({ averageValue }) => ({
  width: "100%",
  height: averageValue,
  backgroundColor: "rgb(255, 255, 255, 0)",
  borderTopWidth: 3,
  borderTopStyle: "dashed",
  borderTopColor: "#de49a2",
  position: "absolute",
  top: `calc(100% - ${averageValue}px)`, // positioning it according to the average value
}));

export const Results = styled.div(({ averageValue }) => ({
  fontSize: "7vw",
  fontWeight: 600,
  textAlign: "left",
  width: "80%",
  position: "absolute",
  top: `calc(100% - ${averageValue}px)`,
  transform: "translateY(-100%)",
  "@media (max-width: 1400px)": {
    fontSize: "8vW",
  },
  "@media (max-width: 900px)": {
    fontSize: "8vh",
  },
  "@media (max-width: 700px)": {
    fontSize: "7vh",
  },
}));

export const Title = styled.div({
  fontWeight: 600,
  fontSize: "4vw",
  textAlign: "center",
  margin: "5vh 0 -3vh 0",
  width: "70%",
  zIndex: 1,
  "@media (max-width: 900px)": {
    margin: "10vh 0 -3vh 0",
    fontSize: "4vw",
    width: "90%",
  },
});
