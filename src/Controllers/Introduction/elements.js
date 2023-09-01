import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 1,
});

export const Circle = styled.div({
  position: "fixed",
  bottom: "-10vh",
  right: "-70vh",
  width: "120vh",
  height: "120vh",
  borderRadius: "50%",
  backgroundColor: "yellow",
  opacity: "0.5",
  filter: "blur(200px)",
});

export const Circle2 = styled.div({
  position: "fixed",
  bottom: "-10vh",
  left: "-70vh",
  width: "120vh",
  height: "120vh",
  borderRadius: "50%",
  backgroundColor: "blue",
  opacity: "0.4",
  filter: "blur(200px)",
});

export const Circle3 = styled.div({
  position: "fixed",
  top: "-70vh",
  left: "0vh",
  width: "120vh",
  height: "120vh",
  borderRadius: "50%",
  backgroundColor: "red",
  opacity: "0.5",
  filter: "blur(200px)",
});

export const StaticBackground = styled.div({
  position: "fixed",
});
