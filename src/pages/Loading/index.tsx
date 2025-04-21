import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./styled";

export default function Loading() {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  // 🔊 오디오 자동 재생 시도
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1.0; // 혹시 볼륨 0일 수도 있으니 명시
      audio.play().catch((e) => {
        console.warn("자동 재생 실패", e);
      });
    }
  }, []);

  // ⏳ 8초 후 결과 페이지 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("from_loading", "true");
      navigate("/result");
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <s.LoaderContainer>
      <s.GradientOverlay />

      <s.ContentContainer>
        <s.HeartbeatContainer>
          <svg viewBox="0 0 600 100" width="100%">
            <s.HeartbeatLine points="0,50 30,50 45,50 60,20 75,80 90,50 105,50 120,50 135,50 150,50 165,20 180,80 195,50 210,50 270,50 285,50 300,20 315,80 330,50 345,50 405,50 420,50 435,20 450,80 465,50 480,50 540,50 555,50 570,20 585,80 600,50" />
            <s.BaselineLine x1="0" y1="50" x2="600" y2="50" />
          </svg>
        </s.HeartbeatContainer>
      </s.ContentContainer>

      <s.BackgroundElement position="top-left" />
      <s.BackgroundElement position="bottom-right" />
      <s.BackgroundElement position="center-right" small />
      <s.BackgroundElement position="bottom-left" small />

      <audio
        ref={audioRef}
        src="/video/heart-sound.mp3"
        autoPlay
        loop
        preload="auto"
      />
    </s.LoaderContainer>
  );
}
