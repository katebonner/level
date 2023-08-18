import styled from "@emotion/styled";

export const Logo = styled.div({
  fontSize: "8em",
  fontWeight: 600,
  paddingBottom: 0,
  marginBottom: 0,
});

export const SinWave = styled.img({
  width: "20vw",
  paddingBottom: "5%",
});

export const Circle = styled.div({
  position: "fixed",
  bottom: "-10vh",
  right: "-70vh",
  width: "120vh",
  height: "120vh",
  borderRadius: "50%",
  backgroundColor: "#006641",
});

export const ConnectButton = styled.button({
  backgroundColor: "transparent",
  textDecoration: "none",
  padding: "20px 30px",
  borderRadius: 50,
  borderWidth: 1,
  borderColor: "#fff",
  borderStyle: "solid",
  fontSize: "0.7em",
  zIndex: 5,
  fontWeight: 600,
  color: "#fff",
  "&:hover": {
    backgroundColor: "#de49a2",
    borderColor: "transparent",
  },
});
