import styled from "@emotion/styled";

export const Logo = styled.div({
  fontSize: "25vw",
  fontWeight: 600,
  paddingBottom: 0,
  marginBottom: 0,
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
  borderRadius: 200,
  borderWidth: 1,
  borderColor: "#fff",
  borderStyle: "solid",
  fontSize: "2vw",
  zIndex: 5,
  fontWeight: 600,
  color: "#fff",
  "&:hover": {
    backgroundColor: "#de49a2",
    borderColor: "transparent",
  },
  "@media (max-width: 900px)": {
    fontSize: "4vw",
  },
});

export const Description = styled.div({
  fontWeight: 600,
  fontSize: "2.5vw",
  width: "70%",
  textAlign: "center",
  margin: "0 0 3vh 0",
  zIndex: 1,
  "@media (max-width: 900px)": {
    fontSize: "5vw",
    width: "60%",
  },
});
