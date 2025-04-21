import * as s from "./styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Main() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleClick = () => {
    navigate("/loading");
  };

  const text = "hello BABY";

  return (
    <s.MainWrap>
      <s.GradientOverlay />
      <s.ContentContainer className={isVisible ? "visible" : ""}>
        <s.TitleSection>
          {text.split("").map((char, i) => (
            <s.TitleChar key={i} index={i} isSpace={char === " "}>
              {char === " " ? "\u00A0" : char}
            </s.TitleChar>
          ))}
        </s.TitleSection>

        <s.ChoiceSection className={isVisible ? "visible" : ""}>
          <s.Options>
            <s.Option color="blue">
              <s.OptionText>Boy</s.OptionText>
            </s.Option>

            <s.OptionSeparator>or</s.OptionSeparator>

            <s.Option color="pink">
              <s.OptionText>Girl</s.OptionText>
            </s.Option>
          </s.Options>
        </s.ChoiceSection>

        <s.ActionButton
          className={isVisible ? "visible" : ""}
          onClick={handleClick}
          aria-label="Continue"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 6L22 12L16 18"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12H2"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </s.ActionButton>
      </s.ContentContainer>

      <s.BackgroundElement position="top-left" />
      <s.BackgroundElement position="bottom-right" />
      <s.BackgroundElement position="center-right" small />
      <s.BackgroundElement position="bottom-left" small />
    </s.MainWrap>
  );
}
