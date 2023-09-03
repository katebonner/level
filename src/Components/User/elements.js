import styled from "@emotion/styled";

export const Container = styled.div({
  top: -30,
});

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
});

export const Name = styled.div({
  fontSize: "4vw",
  fontWeight: 600,
  position: "absolute",
  opacity: 0.3,
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@media (max-width: 900px)": {
    fontSize: "8vw",
    textAlign: "center",
  },
});
