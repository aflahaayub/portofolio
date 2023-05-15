import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import LocomotiveScroll from "locomotive-scroll"

export const useSmoothScroll = () => {
  const scrollRef = useRef()
  const location = useLocation()

  console.log(location)
  console.log(scrollRef)

  useEffect(() => {
    const loadImg = require("imagesloaded")
    // const img = document.querySelectorAll("img")
    if (document.querySelector("[data-scroll-container]")) {
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        tablet: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      })
      // loadImg(img, () => locoScroll.update())
      return () => {
        if (locoScroll) locoScroll.destroy()
      }
    }
  }, [])

  return { scrollRef }
}
