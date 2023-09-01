import styled from "@emotion/styled";

export const Logo = styled.div({
  fontSize: "8vw",
  fontWeight: 600,
  position: "absolute",
  left: "60px",
  marginTop: "10%",
  opacity: 0.6,
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

export const Description = styled.div({
  fontSize: "2vw",
  fontWeight: 600,
  position: "absolute",
  opacity: 0.2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@media (max-width: 900px)": {
    fontSize: "4vw",
    textAlign: "center",
  },
});
