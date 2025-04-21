// Result.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import * as s from "./styled";

export default function Result() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fromLoading = sessionStorage.getItem("from_loading");

    if (fromLoading !== "true") {
      // 정상 경로 아님 → 메인으로
      navigate("/main");
      return;
    }

    // 내용 표시 타이밍 설정
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    // 3초 후 팡파레 실행
    setTimeout(() => {
      launchConfetti();
    }, 2000);

    // 새로고침 시 세션 날리기
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("from_loading");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [navigate]);

  // 더 화려한 팡파레 효과
  const launchConfetti = () => {
    // 첫 번째 폭발
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      // colors: ["#87CEEB", "#1E90FF", "#4169E1", "#0000CD", "#00BFFF"], // 파란색 계열
      colors: ["#FFB6C1", "#FF69B4", "#FF1493", "#FFC0CB", "#DB7093"], // 핑크색 계열
    });

    // 0.5초 후 두 번째 폭발
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        // colors: ["#87CEEB", "#1E90FF", "#4169E1"], // 남자아이
        colors: ["#FFB6C1", "#FF69B4", "#FFC0CB"], // 여자아이
      });
    }, 500);

    // 0.8초 후 세 번째 폭발
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        // colors: ["#87CEEB", "#1E90FF", "#4169E1"], // 남자아이
        colors: ["#FFB6C1", "#FF69B4", "#FFC0CB"], // 여자아이
      });
    }, 800);
  };

  return (
    <s.ResultWrap className="girl">
      <s.ResultContainer show={showContent}>
        <s.ResultBox className="girl">
          <s.ResultImgBox className="girl">
            <s.BabyImage src="/images/girl.png" alt="아기 여자아이" />
          </s.ResultImgBox>

          <s.ResultTitleWrapper>
            <s.ResultTitle show={showContent} delay={0.5}>
              쑥쑥이는
            </s.ResultTitle>

            <s.GenderReveal show={showContent} delay={1.2} className="girl">
              <s.GenderText className="girl">여자아이</s.GenderText>
              <s.HeartIcon>🩷</s.HeartIcon>
            </s.GenderReveal>

            <s.ResultTitle show={showContent} delay={2}>
              입니다
            </s.ResultTitle>
          </s.ResultTitleWrapper>

          <s.Decoration className="star1 girl" />
          <s.Decoration className="star2 girl" />
          <s.Decoration className="star3 girl" />
          <s.Decoration className="star4 girl" />
          <s.Decoration className="star5 girl" />

          {/* <s.ShareButton show={showContent} delay={3}>
            소중한 소식 공유하기
            <s.ShareIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.59 13.51L15.42 17.49"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.41 6.51L8.59 10.49"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </s.ShareIcon>
          </s.ShareButton> */}
        </s.ResultBox>
      </s.ResultContainer>
    </s.ResultWrap>
  );
}
