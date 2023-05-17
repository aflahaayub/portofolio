import React, { useEffect, useRef } from "react"

import { Cursor } from "../styles/cursorStyles"

//context
import { useGlobalStateContext } from "../Context/globalContext"
import { useLocation } from "react-router-dom"

export const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext()
  const cursor = useRef(null)

  const onMouseMove = e => {
    const { clientX, clientY } = e
    cursor.current.style.left = `${clientX}px`
    cursor.current.style.top = `${clientY}px`
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor className={`${!!cursorType ? cursorType : ""}`} ref={cursor} />
    </>
  )
}
