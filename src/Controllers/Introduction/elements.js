import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  flexWrap: "wrap",
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

export const Title = styled.text({
  fontSize: "5vw",
  fontWeight: 600,
  paddingBottom: 0,
  marginBottom: 0,
  width: "70%",
  textAlign: "center",
  zIndex: 1,
  "@media (max-width: 900px)": {
    fontSize: "10vw",
    width: "80%",
  },
});

export const Description = styled.div({
  fontSize: "2vw",
  width: "70%",
  fontWeight: 600,
  textAlign: "center",
  margin: "2vh 0",
  zIndex: 1,
  "@media (max-width: 900px)": {
    fontSize: "4vw",
    width: "80%",
  },
});

export const ValenceButton = styled.button({
  backgroundColor: "transparent",
  textDecoration: "none",
  padding: "20px 30px",
  borderRadius: 50,
  borderWidth: 1,
  borderColor: "#fff",
  borderStyle: "solid",
  fontSize: "0.7em",
  marginTop: "10%",
  fontWeight: 400,
  color: "#fff",
  position: "relative",
  zIndex: 99999,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
});
