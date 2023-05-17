import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

//styled
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { Locomotive } from "../styles/locomotive"
//animation
import { AnimatePresence } from "framer-motion"

//components
import { Home } from "./Home"
import { Projects } from "../pages/Projects"
import { About } from "../pages/About"
import { CustomCursor } from "../UI/CustomCursor"

//context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../Context/globalContext.js"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${Locomotive}
  *{
    text-decoration: none;
    // cursor: none;
  }

  html{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body{
    font-family: 'Rubik', sans-serif;
    background-color: #FFDC83;
    overscroll-behavior: none;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
  }

  svg{
    width: 35px;
  }

  .navbar{
    background-color: transparent;
  }
  
  .navbar.colorChange{
      background-color: #000;
  }
`

export const Layout = ({ children }) => {
  const location = useLocation()
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    let cursor = (cursorStyles.includes(cursorType) && cursorType) || false

    dispatch({ type: "CURSOR_TYPE", cursorType: cursor })
  }

  useEffect(() => {
    onCursor(false)
  }, [location])
  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onCursor={onCursor} />} />
          <Route path="/projects" element={<Projects onCursor={onCursor} />} />
          <Route path="/about" element={<About onCursor={onCursor} />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
