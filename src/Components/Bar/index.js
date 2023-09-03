/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div css={containerStyles}>
      <div css={barStyles(progress)}></div>
    </div>
  );
};

const containerStyles = css`
  width: 100%;
  border: 1px solid #fff;
  opacity: 0.6;
  border-radius: 100px;
  overflow: hidden;
  height: 50px;
  z-index: 10;
  margin: 2% 0 2% 0;
`;

const barStyles = (progress) => css`
  width: ${progress}%;
  height: 100%;
  background-color: #fff;
  transition: width 1s;
`;

export default ProgressBar;
