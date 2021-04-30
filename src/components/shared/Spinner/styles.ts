import styled from '@emotion/styled/macro'
import { keyframes } from '@emotion/css'

export const Wrapper = styled.span`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
`

const puff = [
  keyframes`
    0% {
      transform: scale(0)
    }
    100% {
      transform: scale(1.0)
    }
  `,
  keyframes`
    0% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  `,
]

type SpinnerCircleProps = {
  delay?: string
}

export const Circle = styled.span<SpinnerCircleProps>`
  position: absolute;
  height: 60px;
  width: 60px;
  border: thick solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  opacity: 1;
  top: calc(50vh - 30px);
  left: calc(50vw - 30px);
  animation-fill-mode: both;
  animation: ${puff[0]}, ${puff[1]};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1),
    cubic-bezier(0.3, 0.61, 0.355, 1);
  animation-delay: ${p => p.delay};
`
