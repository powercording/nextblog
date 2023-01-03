import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const welcomeWords = "Nextjs 블로그에 오신것을 환영합니다.";

const cursorEffects = keyframes`
  50% {
    opacity: 0;
  }
`;

const H1 = styled.h1<{ blink: boolean }>`
  font-size: 2rem;
  &: after {
    content: " ";
    border-right: 2px solid red;
    /* animation: ${cursorEffects} 0.7s step-end infinite; */
    animation: ${props => (props.blink ? cursorEffects : null)} 0.7s step-end
      infinite;
  }
`;

const wait = (waitingTime: number) => {
  return new Promise(res => setTimeout(res, waitingTime));
};

const Main: NextPage = () => {
  const [showingWords, setShowingWords] = useState("");
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const typingEffects = async () => {
      const letter = welcomeWords.split("");
      let word = showingWords;

      while (letter.length) {
        await wait(150);
        word += letter.shift();

        setShowingWords(prev => word);
      }

      if (letter.length === 0) {
        await wait(3000);
        setBlink(prev => !prev);
      }

      await wait(150);
    };
    typingEffects();
  }, []);

  return (
    <div>
      <H1 blink={blink}>{showingWords}</H1>
    </div>
  );
};

export default Main;
