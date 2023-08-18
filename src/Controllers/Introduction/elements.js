import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  zIndex: 1,
});

export const Title = styled.text({
  fontSize: "15vw",
  fontWeight: 600,
  paddingBottom: 0,
  marginBottom: 0,

  textAlign: "center",
  zIndex: 1,
});

export const Description = styled.div({
  fontSize: "2vw",
  width: "80%",
  fontWeight: 600,
  textAlign: "center",
  margin: "2vh 0",
  zIndex: 1,
  "@media (max-width: 900px)": {
    fontSize: "4vw",
    width: "80%",
  },
});

export const Quote = styled.div({
  fontSize: "2vw",
  width: "80%",
  margin: "2vh 0",
  textAlign: "center",
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
  fontWeight: 600,
  color: "#fff",
  position: "relative",
  zIndex: 99999,
  "&:hover": {
    backgroundColor: "#de49a2",
    borderColor: "transparent",
  },
});

export const Circle = styled.div({
  position: "fixed",
  bottom: "10vh",
  left: "-50vw",
  width: "200vw",
  height: "200vh",
  borderRadius: "50%",
  backgroundColor: "#006641",
});
