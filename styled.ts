import styled, { keyframes } from "styled-components";

const blinkEffects = keyframes`
 50% {
  opacity: 0;
 }
`;

export const Cursor = styled.div`
  background-color: red;
  width: 3px;
  height: 1rem;
  animation: ${blinkEffects} 1s ease-in-out infinite;
  position: relative;
`;
