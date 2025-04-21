import styled, { keyframes, css } from "styled-components";

// Animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const charFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(15px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
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

export const subtleFloat = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, -10px); }
  100% { transform: translate(0, 0); }
`;

export const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

// Main container
export const MainWrap = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f8faff;
  display: flex;
  align-items: center;
  justify-content: center;
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
    rgba(245, 250, 255, 0.8) 0%,
    rgba(252, 253, 255, 0.5) 100%
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
  padding: 3.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow:
    0 20px 60px rgba(100, 120, 180, 0.12),
    0 0 0 1px rgba(220, 230, 250, 0.6);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Title Section
export const TitleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const TitleChar = styled.span<{ index: number; isSpace?: boolean }>`
  display: inline-block;
  font-size: 3.2rem;
  font-weight: 700;
  margin: ${(props) => (props.isSpace ? "0 0.2rem" : "0 0.1rem")};
  background: linear-gradient(120deg, #ff9a8b 0%, #ff6a95 50%, #ff9a8b 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation:
    ${charFadeIn} 0.7s forwards,
    ${gradientFlow} 8s infinite ease;
  animation-delay: ${(props) => props.index * 0.08}s;
  opacity: 0;
  transform: scale(0.9);
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Choice Section
export const ChoiceSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.8s ease 1s,
    transform 0.8s ease 0.5s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0 2rem;
`;

export const Option = styled.div<{ color: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const OptionText = styled.button`
  position: relative;
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  transition: transform 0.3s ease;

  ${Option}:first-child & {
    background: linear-gradient(135deg, #8ed2ff, #4aa0e6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${gradientFlow} 8s infinite ease;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 20%;
      width: 60%;
      height: 2px;
      background: linear-gradient(to right, transparent, #8ed2ff, transparent);
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;
      transform: scaleX(0.7);
    }

    &:hover {
      transform: translateY(-3px);

      &::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

  ${Option}:last-child & {
    background: linear-gradient(135deg, #ffc1d9, #f984a1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${gradientFlow} 8s infinite ease;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 20%;
      width: 60%;
      height: 2px;
      background: linear-gradient(to right, transparent, #ffc1d9, transparent);
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;
      transform: scaleX(0.7);
    }

    &:hover {
      transform: translateY(-3px);

      &::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

export const OptionSeparator = styled.div`
  font-size: 1.2rem;
  color: #bbb;
  margin: 0 1.5rem;
  font-weight: 400;
  opacity: 0.7;
`;

// Action Button
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  margin-top: 1rem;
  cursor: pointer;
  background: white;
  box-shadow:
    0 10px 25px rgba(100, 110, 160, 0.1),
    0 0 0 1px rgba(220, 230, 250, 0.5);
  transition: opacity 0.8s ease 1.5s;
  opacity: 0;
  transform: translateY(20px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${pulseAnimation} 3s 1.5s ease-in-out infinite;
    animation-delay: 1.8s;
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 12px 30px rgba(100, 120, 180, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 35px;
  }
`;

export const ArrowIcon = styled.div`
  position: relative;
  width: 20px;
  height: 14px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #666;
    transition: background-color 0.3s ease;
  }

  &::before {
    top: 50%;
    left: 0;
    width: 20px;
    height: 2px;
    transform: translateY(-50%);
  }

  &::after {
    top: 50%;
    right: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #666;
    border-right: 2px solid #666;
    transform: translateY(-50%) rotate(45deg);
    margin-top: -5px;
  }

  ${ActionButton}:hover &::before,
  ${ActionButton}:hover &::after {
    background-color: #ff6a95;
    border-color: #ff6a95;
  }
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
