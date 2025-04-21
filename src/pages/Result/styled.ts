// styled.ts for Result
import styled, { keyframes, css } from "styled-components";

// 애니메이션 정의
export const fadeInScale = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

export const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const shakeImg = keyframes`
  0% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  100% { transform: rotate(-5deg); }
`;

export const sparkle = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
`;

export const backgroundShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// 배경 스타일링
export const ResultWrap = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f8ff, #f8fbff);

  &.girl {
    background: linear-gradient(135deg, #fff0f5, #fff5fa);
  }
`;

export const BackgroundCircles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

export const Circle = styled.div`
  position: absolute;
  border-radius: 50%;

  &.circle1 {
    top: -10%;
    left: -10%;
    width: 40%;
    height: 40%;
    background: linear-gradient(
      45deg,
      rgba(135, 206, 235, 0.2),
      rgba(30, 144, 255, 0.1)
    );
    animation: ${float} 15s ease-in-out infinite;

    &.girl {
      background: linear-gradient(
        45deg,
        rgba(255, 182, 193, 0.2),
        rgba(255, 105, 180, 0.1)
      );
    }
  }

  &.circle2 {
    bottom: -15%;
    right: -15%;
    width: 50%;
    height: 50%;
    background: linear-gradient(
      45deg,
      rgba(65, 105, 225, 0.1),
      rgba(0, 191, 255, 0.15)
    );
    animation: ${float} 20s ease-in-out infinite reverse;

    &.girl {
      background: linear-gradient(
        45deg,
        rgba(255, 20, 147, 0.1),
        rgba(255, 192, 203, 0.15)
      );
    }
  }

  &.circle3 {
    top: 40%;
    left: 60%;
    width: 30%;
    height: 30%;
    background: linear-gradient(
      45deg,
      rgba(0, 191, 255, 0.05),
      rgba(135, 206, 235, 0.1)
    );
    animation: ${float} 18s ease-in-out 2s infinite;

    &.girl {
      background: linear-gradient(
        45deg,
        rgba(219, 112, 147, 0.05),
        rgba(255, 182, 193, 0.1)
      );
    }
  }
`;

// 결과 컨테이너 스타일링
export const ResultContainer = styled.div<{ show: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ResultBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 90%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  animation: ${fadeInScale} 0.8s ease-out forwards;

  &.girl {
    box-shadow: 0 15px 35px rgba(255, 182, 193, 0.15);
  }
`;

// 아기 이미지 스타일링
export const ResultImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      rgba(135, 206, 235, 0.3),
      rgba(30, 144, 255, 0.2)
    );
    z-index: -1;
    animation: ${pulse} 3s ease-in-out infinite;
  }

  &.girl::after {
    background: linear-gradient(
      45deg,
      rgba(255, 182, 193, 0.3),
      rgba(255, 105, 180, 0.2)
    );
  }
`;

export const BabyImage = styled.img`
  width: 120px;
  height: auto;
  animation: ${shakeImg} 6s ease-in-out infinite;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
  z-index: 2;
`;

// 텍스트 스타일링
export const ResultTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const ResultTitle = styled.h1<{ show: boolean; delay: number }>`
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  animation: ${(props) =>
    props.show &&
    css`
      ${fadeInUp} 0.8s ${props.delay}s forwards
    `};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const GenderReveal = styled.div<{ show: boolean; delay: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: ${(props) =>
    props.show &&
    css`
      ${fadeInUp} 0.8s ${props.delay}s forwards,
    ${pulse} 2s ${props.delay + 0.8}s infinite
    `};

  &.girl {
    color: #ff69b4;
  }
`;

export const GenderText = styled.span`
  color: #0078d7;
  font-size: 38px;
  font-weight: 700;
  // background: linear-gradient(90deg, #1e90ff, #4169e1);
  // background-size: 200% 200%;
  animation: ${backgroundShift} 3s ease infinite;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  &.girl {
    color: #ff69b4;
    // background: linear-gradient(90deg, #ff69b4, #ff1493);
    // background-size: 200% 200%;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeartIcon = styled.span`
  font-size: 36px;
  animation: ${pulse} 1.5s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

// 장식 요소 스타일링
export const Decoration = styled.div`
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  opacity: 0.8;

  &.star1 {
    top: 15%;
    left: 10%;
    background: radial-gradient(circle, #87ceeb 0%, transparent 70%);
    animation: ${sparkle} 3s 1s ease-in-out infinite;

    &.girl {
      background: radial-gradient(circle, #ffb6c1 0%, transparent 70%);
    }
  }

  &.star2 {
    top: 20%;
    right: 15%;
    width: 15px;
    height: 15px;
    background: radial-gradient(circle, #4169e1 0%, transparent 70%);
    animation: ${sparkle} 4s 0.5s ease-in-out infinite;

    &.girl {
      background: radial-gradient(circle, #ff69b4 0%, transparent 70%);
    }
  }

  &.star3 {
    bottom: 25%;
    left: 15%;
    background: radial-gradient(circle, #00bfff 0%, transparent 70%);
    animation: ${sparkle} 3.5s 0.8s ease-in-out infinite;

    &.girl {
      background: radial-gradient(circle, #ff1493 0%, transparent 70%);
    }
  }

  &.star4 {
    bottom: 20%;
    right: 10%;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #1e90ff 0%, transparent 70%);
    animation: ${sparkle} 4.5s 1.2s ease-in-out infinite;

    &.girl {
      background: radial-gradient(circle, #ffc0cb 0%, transparent 70%);
    }
  }

  &.star5 {
    top: 50%;
    right: 5%;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, #87ceeb 0%, transparent 70%);
    animation: ${sparkle} 3.2s 1.5s ease-in-out infinite;

    &.girl {
      background: radial-gradient(circle, #db7093 0%, transparent 70%);
    }
  }
`;

// 공유 버튼 스타일링
export const ShareButton = styled.button<{ show: boolean; delay: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(90deg, #1e90ff, #4169e1);
  background-size: 200% 200%;
  animation: ${backgroundShift} 3s ease infinite;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(30, 144, 255, 0.4);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${(props) =>
    props.show &&
    css`
      ${fadeInUp} 0.8s ${props.delay}s forwards
    `};

  &.girl {
    background: linear-gradient(90deg, #ff69b4, #ff1493);
    background-size: 200% 200%;
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(30, 144, 255, 0.5);

    &.girl {
      box-shadow: 0 8px 20px rgba(255, 105, 180, 0.5);
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ShareIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
