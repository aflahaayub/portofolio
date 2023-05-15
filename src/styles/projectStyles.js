import styled from "styled-components"
import { motion } from "framer-motion"

export const StyleProjects = styled(motion.div)``

export const Container = styled(motion.div)`
  padding: 0 1.5rem;
  position: relative;

  @media (min-width: 52em) {
    padding: 1rem 9rem;
    margin-top: 80px;
  }
`
export const Project = styled(motion.div)`
  margin: 3vw auto;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  max-width: 100%
  position:relative;
`
export const Wrap = styled(motion.div)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  max-height: 820px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    border-style: none;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    max-width: 100%;
    display: block;
    height: 100%;

    object-position: top center;
    position: relative;
    width: 100%;

    @media (min-width: 52em) {
      min-height: 370px;
      height: 60vh;
      object-fit: cover;
    }
  }
`
export const Caption = styled(motion.div)`
  margin-top: 2rem;

  h2 {
    flex: 2;
    padding-right: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
  }

  .brick {
    &::before {
      content: "____";
      line-height: 1;
      color: #7a4128;
      font-weight: 700;
      font-size: 2.5rem;
      margin: 0 0 1rem;
      display: block;
    }
  }

  p {
    flex: 1;
    margin: 0;
    padding-bottom: 2rem;
  }

  @media (min-width: 52em) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    h2 {
      font-size: 3rem;
    }
  }
`
export const LinkProject = styled(motion.a)`
  flex: 1;
  font-size: 2rem;
  font-weight: 700;

  color: white;
  -webkit-text-stroke: 1px black;
  text-shadow: -6px 7px 6px rgba(0, 0, 0, 0.25);
`
