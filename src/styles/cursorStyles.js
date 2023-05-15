import styled, { css } from "styled-components"

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: #000;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, border, transform;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #000;
  }
  &.pointer {
    background-color: #fff;
    width: 50px;
    height: 50px;
    mix-blend-mode: difference;
  }
`
