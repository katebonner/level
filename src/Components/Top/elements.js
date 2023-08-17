import styled from "@emotion/styled";

export const AlbumCovers = styled.img({
  margin: 0,
  padding: 0,
  height: "12.5vw",
  width: "12.5vw",
  "@media (max-width: 1450px)": {
    height: "25vw",
    width: "25vw",
  },
});

export const RowWrap = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  filter: "brightness(35%)",
});
