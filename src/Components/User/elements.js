import styled from "@emotion/styled";

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
});

export const RowFixed = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const AbsolutePosition = styled.div({
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "130vh",
});

export const ScoreContainer = styled.div({
  width: "50vw",
  marginTop: "20vh",
  marginLeft: "30vw",

  "@media (max-width: 900px)": {
    width: "80vw",
    marginLeft: 0,
  },
});

export const Name = styled.div({
  fontSize: "4vw",
  fontWeight: 800,
  textAlign: "center",
  opacity: 0.6,
});

export const Description = styled.div({
  fontSize: "2vw",
  fontWeight: 400,
  opacity: 0.6,
  textAlign: "center",
});

export const SectionContainer = styled.div({
  backgroundColor: "rgb(255,255,255,0.2)",
  padding: "2% 5% 3% 5%",
  margin: "2% 2%",
  borderRadius: 0,
  flex: 1,
  "@media (max-width: 900px)": {
    padding: "2% 5% 5% 5%",
  },
});

export const Section = styled.div({
  fontSize: "1.5vw",
  fontWeight: 700,
  textAlign: "center",
  margin: "1% 1%",
});

export const SectionText = styled.div({
  fontSize: "1.5vw",
  fontWeight: 400,
  textAlign: "left",
  margin: "5% 0 0 0",
  "@media (max-width: 900px)": {
    fontSize: "2vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "3vw",
  },
});

export const Result = styled.div({
  fontSize: "6vw",
  fontWeight: 700,
  margin: "0 0 5% 0",
  textAlign: "center",
  "@media (max-width: 900px)": {
    fontSize: "8vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "9vw",
  },
});

export const Icon = styled.div({
  fontSize: "4vw",
  margin: "0 3% 0 0",
  fontWeight: 600,

  textAlign: "center",
  "@media (max-width: 900px)": {
    fontSize: "10vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "10vw",
  },
});
