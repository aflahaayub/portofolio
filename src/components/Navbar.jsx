import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"
import { motion } from "framer-motion"

const Nav = styled(motion.div)`
  display: flex;
  position: sticky;
  // position: relative;
  top: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  width: 100%;
  // padding-top: 2rem;
`

const NavContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
  .color {
    background-color: #7a4128;
  }

  svg {
    fill: white;
    filter: drop-shadow(4px 5px 2px rgb(0 0 0 / 0.4));
    width: 42px;
    stroke: rgb(0, 0, 0);
    stroke-width: 6px;
  }

  h1 {
    font-size: 3rem;
    margin: 0.67em 0px;
    color: white;
    letter-spacing: 0.08rem;
    -webkit-text-stroke: 1px black;
    text-shadow: -6px 7px 6px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 52em) {
    width: 80vw;
    h1 {
      font-size: 4rem;
      line-height: 1rem;
    }
  }
`

export const Navbar = ({ onCursor, name }) => {
  return (
    <Nav>
      <NavContainer>
        <Link
          to={"/"}
          className="arrow"
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
        <h1>{name}</h1>
      </NavContainer>
    </Nav>
  )
}
