import styled, { keyframes } from 'styled-components'
import { ComponentProps } from './protocols/interface'

const zoomOut = keyframes`

  0%{
    transform: scale(1.5);
  }

  100%{
    transform: scale(1);
  }

`
export const Container = styled.div<ComponentProps>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${zoomOut} 3s ease-out;
    width: 220px;
    height: 220px;
  }
`
