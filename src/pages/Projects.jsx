import React from "react"
import { useSmoothScroll } from "../hooks/useSmoothScroll"

import { Navbar } from "../components/Navbar"

import {
  StyleProjects,
  Container,
  Project,
  LinkProject,
  Wrap,
  Caption,
} from "../styles/projectStyles"

import { Flex } from "../styles/globalStyles.js"

const dataProjects = [
  {
    img: require("../assets/fylo.jpg"),
    link: "https://fylolandingpage.vercel.app/",
    title: "My First Website",
    explanation: `When I built my first website, the FYLO landing page, as a project from Frontend Mentor, I faced numerous challenges while working with HTML and CSS. Being a beginner web developer, I found it quite difficult to navigate through CSS, until I eventually gained a better understanding and achieved the results I had hoped for.`,
  },
  {
    img: require("../assets/travel.jpg"),
    link: "https://ourtravel.vercel.app/",
    title: "Our Travel",
    explanation: `Our Travel is a landing page for travel website where the user can book a ticket and read a few article about places to travel. Build using HTML, CSS, and Bootstrap, we created a visually appealing and user-friendly website. This website is a collaboration project with students in Binar Academy  Bootcamp. It was an incredible experience to work together, learning from each other and pushing our boundaries. `,
  },
  {
    img: require("../assets/play1.jpg"),
    link: "https://rock-paper-scissors-three-khaki.vercel.app/",
    title: "The Classic Rock Paper Scissors Game ",
    explanation: `
    This website was developed by combining several challenges from Binar Bootcamp. I had the opportunity to build the website based on a provided design using Figma. Throughout the development process, I utilized HTML, CSS, JavaScript, and Bootstrap to bring the design to life. One of the exciting features of this website is the "Play Now" functionality. When users click on the "Play Now" button, they are taken to a game page where they can engage in a classic game of rock, paper, scissors with the computer.
    `,
    moreExplanation: `It's an interactive experience that allows users to test their skills against the computer's randomized responses. 
    To play the game, users simply need to select one of the options available in the player's columns, such as rock, paper, or scissors. Upon making their selection, the computer instantly generates its response, and the result of the match is displayed. This immediate feedback adds an element of excitement and keeps users engaged in the game. Overall, creating this project was a truly enjoyable experience. It provided me with the opportunity to apply my knowledge of web development and create an interactive and entertaining game for users to enjoy.`,
  },
  {
    img: require("../assets/learningmedia.jpg"),
    link: "https://learningmediapsrtv.com/",
    title: "3D Learning Media for High School Students ",
    explanation: `This website was developed as part of my thesis, which focused on researching learning media for vocational high school students. The website incorporates 3D technology, developed using Three.js, along with HTML, CSS, and JavaScript. The backend is powered by Node.js, Express, and MongoDB.

    The website offers an interactive learning experience where students can explore topics related to signals and radio. With the help of 3D technology, along with text and audio explanations, students can dive into the subject matter in an engaging and immersive way. It's an exciting opportunity for them to grasp complex concepts through interactive visuals.
    
     `,
    moreExplanation: `At the end of each lesson, students have the chance to test their understanding through a quiz. The quiz results are displayed immediately, providing instant feedback and allowing students to gauge their comprehension of the material. Additionally, there is a leaderboard page where students can view their scores and compare them to those of other students. It adds a competitive element and encourages students to strive for improvement. The 3D technology I utilized in this project sparked curiosity among the students. Many of them were intrigued and asked about the technology I used and how to create similar experiences. It was truly an amazing experience to showcase the website and witness the students' enthusiasm. I'm delighted to have had the opportunity to introduce them to cutting-edge technologies and inspire their interest in the subject matter. It's truly rewarding to witness their excitement and eagerness to learn.`,
  },
  {
    img: require("../assets/bookstore.jpg"),
    link: "https://react-bookstore-seven.vercel.app/",
    title: "SPA Book Store",
    explanation: `SPA Book Store is Single Page Application website designed for purchasing books developed with React.js, HTML, CSS Modules, and JavaScript. Users have the ability to add books they desire to their shopping cart, and the website dynamically updates the cart count to reflect the changes. Additionally, the website displays detailed information about the selected books, including the book name, total quantity, individual book prices, and the overall total for all the books in the user's cart.  `,
  },
]

export const Projects = ({ onCursor }) => {
  const { scrollRef } = useSmoothScroll()

  return (
    <>
      <StyleProjects
        onMouseEnter={onCursor}
        ref={scrollRef}
        data-scroll-container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar onCursor={onCursor} name={"Projects"} />

        <Container>
          {dataProjects.length > 0 &&
            dataProjects.map((data, index) => (
              <Project key={index} ref={scrollRef} data-scroll-section>
                <Wrap>
                  <img src={`${data.img}`} alt="projects" />
                </Wrap>

                <Caption>
                  <h2>{data.title}</h2>
                  <Flex direction={"column"}>
                    <div className="brick"></div>
                    <p>{data.explanation}</p>
                    {data.moreExplanation && <p>{data.moreExplanation}</p>}
                    <LinkProject
                      href={`${data.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => onCursor("hovered")}
                      onMouseLeave={onCursor}
                    >
                      View Project
                    </LinkProject>
                  </Flex>
                </Caption>
              </Project>
            ))}
        </Container>
      </StyleProjects>
    </>
  )
}
