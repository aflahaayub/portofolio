import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  @media (min-width: 768px) {
    grid-template-rows: 80% 20%;
  }
`

export const OtherPage = styled(Link)`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  color: white;
  -webkit-text-stroke: 2px black;
  text-shadow: -5px 10px 4px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid black;
  -webkit-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    background-color: #7a4128;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  ${props =>
    props.grow &&
    css`
      flex-grow: 2;
    `}

  @media (max-width: 52rem) {
    font-size: 1.3rem;
  }
`

export const Main = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 5rem;
    color: white;
    -webkit-text-stroke: 1px black;
    text-shadow: -5px 4px 0px #000000;
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.08rem;
    color: white;
    -webkit-text-stroke: 1px black;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {
    letter-spacing: 0.2rem;
    padding: 1rem 3rem;
    h1 {
      font-size: 6rem;
      line-height: 1rem;
    }
  }
`
