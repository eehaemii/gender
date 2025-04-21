import styled, { keyframes, css } from "styled-components";

// Animations
export const heartbeatAnimation = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.02);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const subtleFloat = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, -10px); }
  100% { transform: translate(0, 0); }
`;

export const gradientFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main container
export const LoaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8faff;
  overflow: hidden;
  font-family: "Montserrat", "Signika", sans-serif;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(242, 247, 255, 0.8) 0%,
    rgba(250, 251, 255, 0.5) 100%
  );
  z-index: 0;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 90vw;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow:
    0 20px 60px rgba(100, 120, 180, 0.12),
    0 0 0 1px rgba(220, 230, 250, 0.6);
  backdrop-filter: blur(10px);
  animation: ${css`
    ${pulseAnimation} 4s infinite ease-in-out
  `};
`;

export const HeartbeatContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(100, 110, 160, 0.08);
`;

export const HeartbeatLine = styled.polyline`
  // stroke: rgba(255, 106, 149, 0.9);
  stroke: rgba(72, 207, 173, 0.9);
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${css`
    ${heartbeatAnimation} 2s linear infinite
  `};
  filter: drop-shadow(0 0 6px rgba(255, 106, 149, 0.4));
`;

export const BaselineLine = styled.line`
  // stroke: rgba(255, 106, 149, 0.3);
  stroke: rgba(72, 207, 173, 0.3);
  stroke-width: 1;
`;

export const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export const TextChar = styled.span<{ delay: number }>`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 2px;
  opacity: 0;
  background: linear-gradient(120deg, #ff9a8b 0%, #ff6a95 50%, #ff9a8b 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${css`
    ${textFadeIn} 0.5s forwards, ${gradientFlow} 8s infinite ease
  `};
  animation-delay: ${(props) => props.delay}s;
`;

export const ProgressContainer = styled.div`
  width: 80%;
  height: 4px;
  background: rgba(220, 230, 250, 0.6);
  border-radius: 2px;
  margin-top: 2rem;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(to right, #8ed2ff, #4aa0e6);
  border-radius: 2px;
  animation: ${css`
    ${progressAnimation} 8s linear forwards
  `};
`;

// Background elements
export const BackgroundElement = styled.div<{
  position: string;
  small?: boolean;
}>`
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  z-index: 1;
  filter: blur(40px);

  ${(props) => {
    const size = props.small ? "140px" : "240px";

    switch (props.position) {
      case "top-left":
        return css`
          width: ${size};
          height: ${size};
          top: -80px;
          left: -60px;
          background: linear-gradient(
            135deg,
            rgba(255, 154, 139, 0.3),
            rgba(255, 106, 149, 0.3)
          );
          animation: ${subtleFloat} 15s infinite ease-in-out;
        `;
      case "bottom-right":
        return css`
          width: ${size};
          height: ${size};
          bottom: -100px;
          right: -80px;
          background: linear-gradient(
            135deg,
            rgba(142, 210, 255, 0.3),
            rgba(74, 160, 230, 0.3)
          );
          animation: ${subtleFloat} 18s infinite ease-in-out reverse;
        `;
      case "center-right":
        return css`
          width: ${size};
          height: ${size};
          top: 40%;
          right: -80px;
          background: linear-gradient(
            135deg,
            rgba(255, 193, 217, 0.2),
            rgba(255, 154, 139, 0.2)
          );
          animation: ${subtleFloat} 20s infinite ease-in-out;
        `;
      case "bottom-left":
        return css`
          width: ${size};
          height: ${size};
          bottom: -60px;
          left: 10%;
          background: linear-gradient(
            135deg,
            rgba(142, 210, 255, 0.2),
            rgba(74, 160, 230, 0.2)
          );
          animation: ${subtleFloat} 17s infinite ease-in-out;
        `;
      default:
        return "";
    }
  }}
`;
