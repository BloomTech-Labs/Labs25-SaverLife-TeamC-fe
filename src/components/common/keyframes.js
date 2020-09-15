import { keyframes } from 'styled-components';

export const Bounce = keyframes`
{
            transform: translateY(-45px);
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
            transform: translateY(-24px);
            animation-timing-function: ease-in;
  }
  65% {
            transform: translateY(-12px);
            animation-timing-function: ease-in;
  }
  82% {
            transform: translateY(-6px);
            animation-timing-function: ease-in;
  }
  93% {
            transform: translateY(-4px);
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
            transform: translateY(0px);
            animation-timing-function: ease-out;
  }
  100% {
            transform: translateY(0px);
            animation-timing-function: ease-out;
    opacity: 1;
  }
}`;

export const Fade = keyframes`
{
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`;
