import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Loader = styled.div({
  border: "8px solid #ffff",
  borderTop: "8px solid transparent",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: `${spin} 1s linear infinite`,
});
