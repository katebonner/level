import styled from "@emotion/styled";
import React from "react";

const moveLeft = `
  @keyframes moveLeft {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
  }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  z-index: 10;
`;

const AnimatedText = styled.span`
  ${moveLeft};
  display: inline-block;
  padding-left: 100%;
  animation: moveLeft ${(props) => props.duration || 10000}ms linear infinite;
`;

const MarqueeText = ({ text, duration }) => {
  return (
    <MarqueeWrapper>
      <AnimatedText duration={duration}>{text}</AnimatedText>
    </MarqueeWrapper>
  );
};

export default MarqueeText;
