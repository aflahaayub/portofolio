import { motion } from "framer-motion"
import styled from "styled-components"

export const Photo = styled(motion.div)`
  display: flex;
  justify-content: center;

  img {
    max-width: 420px;
    margin: 0 1rem;
    width: 17rem;
  }

  @media (min-width: 52em) {
    img {
      margin: 0 2rem;
      width: 420px;
    }
  }
`

export const Content = styled(motion.div)`
  min-width: 17rem;
`
export const Tools = styled(motion.div)``
