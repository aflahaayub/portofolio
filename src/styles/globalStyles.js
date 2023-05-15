import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Grid = styled.div`
  display: grid;
  @media (min-width: 975px) {
    grid-template-columns: ${props => props.frame};
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`
export const SocialMedia = styled(motion.div)`
  display: flex;
  flex: 1;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
  ${props =>
    props.borderbtm &&
    css`
      border-bottom: 1px solid black;
    `}
`

export const MarqueeText = styled.a`
  width: 100vw;
  display: flex;
  padding: 1em 0;
  white-space: nowrap;
  overflow: hidden;
  z-index: 3;
  letter-spacing: 0.3rem;

  align-items: center;
  background-color: #7a4128;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));

  ul {
    display: flex;
    gap: 6rem;
    list-style: none;
    transform: translate3d(var(--move-initial), 0, 0);
    -webkit-animation: scrolling-left 5s linear infinite;
    animation: scrolling-left 5s linear infinite;
  }

  li {
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffd878;
    text-transform: uppercase;
    -webkit-text-stroke: 2px black;
    text-shadow: -22px 15px 4px rgba(0, 0, 0, 0.25);
  }

  @keyframes scrolling-left {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }
    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }

  &:hover {
    background-color: #ffd878;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    li {
      color: #7a4128;
    }
  }
`
