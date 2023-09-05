import styled from "@emotion/styled";

export const Container = styled.div({
  top: -30,
});

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
  justifyContent: "center",
  "@media (max-width: 900px)": {
    justifyContent: "flex-start",
  },
});

export const Name = styled.div({
  fontSize: "4vw",
  fontWeight: 800,
  position: "absolute",
  textAlign: "center",
  opacity: 0.6,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@media (max-width: 900px)": {
    fontSize: "8vw",
  },
});

export const Description = styled.div({
  fontSize: "2vw",
  fontWeight: 400,
  position: "absolute",
  opacity: 0.6,
  top: "63%",
  left: "50%",
  textAlign: "center",
  width: "100%",
  transform: "translate(-50%, -50%)",
  "@media (max-width: 1200px)": {
    top: "60%",
  },
  "@media (max-width: 900px)": {
    fontSize: "2vw",
    top: "61%",
  },
  "@media (max-width: 700px)": {
    fontSize: "3vw",
    top: "59%",
  },
});

export const SectionContainer = styled.div({
  backgroundColor: "rgb(255,255,255,0.2)",
  padding: "2% 5%",
  margin: "2% 2%",
  borderRadius: 10,
  flex: 1,
  "@media (max-width: 900px)": {
    padding: "2% 5% 5% 5%",
  },
});

export const Section = styled.div({
  fontSize: "2.2vw",
  fontWeight: 600,
  textAlign: "center",
  margin: "4% 0 2% 0",

  "@media (max-width: 900px)": {
    fontSize: "4vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "5vw",
  },
});

export const SectionText = styled.div({
  fontSize: "1.5vw",
  fontWeight: 400,
  textAlign: "center",
  margin: "5% 0 0 0",
  "@media (max-width: 900px)": {
    fontSize: "2vw",
    textAlign: "left",
  },
  "@media (max-width: 700px)": {
    fontSize: "2.5vw",
  },
});

export const Result = styled.div({
  fontSize: "6vw",
  fontWeight: 600,
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
