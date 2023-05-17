import React from "react"

import { useSmoothScroll } from "../hooks/useSmoothScroll"
import { Navbar } from "../components/Navbar"

import { Container, StyleProjects } from "../styles/projectStyles"
import { Grid, MarqueeText, Flex, SocialMedia } from "../styles/globalStyles.js"

import { Photo, Content, Tools } from "../styles/aboutStyles"

import me from "../assets/aflaha.jpeg"

export const About = ({ onCursor, props }) => {
  const { scrollRef } = useSmoothScroll()
  return (
    <>
      <StyleProjects
        onMouseEnter={onCursor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar onCursor={onCursor} name={"About"} />
        <Container>
          <Grid frame={"1fr 2fr"}>
            <Flex borderLeft direction={"column"}>
              <Photo
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
              >
                <img src={me} alt="aflaha" />
              </Photo>
              <SocialMedia>
                <a
                  href="http://www.github.com/aflahaayub"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aflaha-ayub-b06933169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </SocialMedia>
            </Flex>
            <Content>
              <h1>
                I'm Aflaha, a passionate individual with a love for technology,
                particularly web development. Based in Jakarta, Indonesia.{" "}
              </h1>
              <p>
                In 2021, I embarked on an exciting journey by joining a Bootcamp
                with a Full Stack Development program. Over the course of six
                months, I immersed myself in the world of coding and gained
                valuable skills that have shaped my career path. Despite having
                graduated from Universitas Negeri Jakarta with a degree in
                Education and a specialization in Electronics Engineering, I
                discovered that my true passion lies in the realm of web
                technology.
              </p>
              <p>
                While you might wonder how my education degree aligns with my
                chosen career, it has actually provided me with a unique set of
                advantages. Pursuing an education degree has not only helped me
                develop a solid foundation of knowledge but also taught me
                essential skills such as effective communication and the art of
                teaching others. These skills have proven to be invaluable as I
                navigate the world of web development, enabling me to
                effectively convey complex concepts and collaborate with clients
                and colleagues.
              </p>
              <p>
                Back in 2020, my curiosity for web development sparked, and I
                embarked on a self-learning journey. With the help of various
                online resources such as YouTube, Udemy, and other reliable
                sources, I gradually honed my skills and built my very first
                website. Since then, I have remained committed to continuous
                learning, always staying up-to-date with the latest technologies
                that are shaping the industry today and in the future.
              </p>
              <p>
                Web development is not just a job for me; it's a genuine passion
                that fuels my desire to create beautiful, user-friendly, and
                innovative digital experiences. I thrive on the challenges that
                each project brings, and I'm dedicated to providing solutions
                that exceed expectations.
              </p>
              <p>
                So, take a look around my portfolio, and let's connect to
                explore how we can collaborate and bring your ideas to life in
                the digital world. I'm excited to embark on this journey with
                you!
              </p>
            </Content>
          </Grid>
          <Tools>
            <h2>Other information about me.</h2>

            <Grid frame={"1fr 1fr"}>
              <div>
                <h3>Technology I usually used to build a website</h3>
                <p>
                  HTML, CSS, Bootstrap, Styled Components, CSS Modules,
                  Tailwind, Javascript, React.Js, Three.Js, Node.js, MongoDB,
                  Git, GitHub, Figma.
                </p>
              </div>
              <div>
                <h3>Education</h3>

                <p>
                  Binar Academy Bootcamp - Full Stack Web Developer (Feb 2021 -
                  Aug 2021)
                </p>
                <p>
                  Universitas Negeri Jakarta - Electronics Engineering
                  Education, 3.60/4.00 (Aug 2018 - Feb 2023)
                </p>
              </div>
            </Grid>
          </Tools>
        </Container>
        <MarqueeText
          ref={scrollRef}
          data-scroll-section
          href="mailto:aflahaaayub@gmail.com"
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          <ul>
            <li>Get In Touch!</li>
            <li>Get In Touch!</li>
            <li>Get In Touch!</li>
            <li>Get In Touch!</li>
          </ul>
        </MarqueeText>
      </StyleProjects>
    </>
  )
}
