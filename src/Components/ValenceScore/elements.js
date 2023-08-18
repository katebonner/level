import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
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
  fontSize: "9vw",
  fontWeight: 600,
  textAlign: "left",
  width: "80%",
  position: "absolute",
  top: `calc(100% - ${averageValue}px)`,
  transform: "translateY(-100%)",
  "@media (max-width: 900px)": {
    fontSize: "8vh",
  },
}));

export const Pink = styled.text({
  color: "#de49a2",
  fontSize: "9vw",
  fontWeight: 600,
  textAlign: "left",
  width: "80%",
  padding: "0 36px",
  "@media (max-width: 900px)": {
    fontSize: "8vh",
  },
});
