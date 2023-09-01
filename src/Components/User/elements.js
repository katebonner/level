import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
});

export const CalculateButton = styled.button({
  backgroundColor: "transparent",
  textDecoration: "none",
  padding: "20px 30px",
  position: "relative",
  borderRadius: 50,
  borderWidth: 1,
  borderColor: "#fff",
  fontWeight: 600,
  borderStyle: "solid",
  fontSize: "0.7em",
  zIndex: 5,
  color: "#fff",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
});

export const Name = styled.div({
  fontSize: "10vw",
  fontWeight: 600,
  width: "90%",
  paddingBottom: "5%",
  position: "relative",
  textAlign: "center",
});
