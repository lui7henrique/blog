import { ProgressBar } from "components/ProgressBar"
import { useMemo, useState } from "react"
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiGraphql
} from "react-icons/si"
import { useTheme } from "styled-components"

import * as S from "./styles"

export const Skills = () => {
  const theme = useTheme()

  const skills = useMemo(
    () => [
      {
        name: "HTML5",
        icon: SiHtml5,
        score: 8
      },
      {
        name: "CSS3",
        icon: SiCss3,
        score: 8
      },
      {
        name: "Javascript",
        icon: SiJavascript,
        score: 8
      },
      {
        name: "ReactJS",
        icon: SiReact,
        score: 8,
        content: (
          <div>
            <p>
              Development of modern and responsive web interfaces using a
              modular and scalable library.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactjs-fundamentos"
                  target="blank"
                >
                  ReactJS Fundamentals:
                </a>
                <p>
                  In this module we will create a base structure of a React
                  application using tools such as Webpack, Babel, Webpack Dev
                  server, SASS, Source Maps, Fast Refresh and discover important
                  React concepts such as components, properties, states and
                  hooks in addition to applying TypeScript in our project to add
                  static typing to the application.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactjs-primeira-aplicacao"
                  target="blank"
                >
                  First web application with ReactJS:
                </a>
                <p>
                  In this module we will build a complete front-end web
                  application using important concepts and tools from the React
                  ecosystem such as Styled Components, MirageJS, Context API,
                  hooks, Axios and much more.
                </p>
              </li>
              <li>
                <a href="https://github.com/lui7henrique/ignews" target="blank">
                  Next.js Fundamentals:
                </a>
                <p>
                  In this module we will understand how Next.js transforms the
                  way we develop front-end applications and we will discover
                  important concepts such as SSR and SSG.
                </p>
              </li>
              <li>
                <a href="https://github.com/lui7henrique/ignews" target="blank">
                  Back-end on front-end:
                </a>
                <p>
                  During this module we will understand how the front-end has
                  transformed in recent years with the possibility of having
                  back-end (serverless) functions running in a front-end
                  environment.
                </p>
              </li>
              <li>
                <a href="https://github.com/lui7henrique/ignews" target="blank">
                  Front-end JAMStack:
                </a>
                <p>
                  It is very common to develop front-end applications that are
                  not connected to a single back-end nowadays, so here we will
                  understand the concept of JAMStack and how to connect our
                  front-end with a CMS.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactjs-criando-interfaces-do-futuro"
                  target="blank"
                >
                  Building interfaces of the future:
                </a>
                <p>
                  In this module we will create the interface of an
                  administrative panel containing authentication flow,
                  dashboard, listing and registration using Chakra UI in
                  Next.js.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactjs-criando-interfaces-do-futuro"
                  target="blank"
                >
                  Data fetching and local cache:
                </a>
                <p>
                  In this module we will use React Query to improve the
                  experience of using our application by creating a data cache
                  layer between the front-end and back-end.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactjs-criando-interfaces-do-futuro"
                  target="blank"
                >
                  Authentication and authorization:
                </a>
                <p>
                  In this module we will understand how to create a complete
                  authentication, authorization and refresh token process within
                  React with Next.js allowing to control access to routes and
                  components both on the client-side and server-side.
                </p>
              </li>
              <li>
                <p>Performing apps with ReactJS:</p>
                <p>
                  A common concern in the development of web applications is
                  performance and, therefore, in this module we will understand
                  how to perform applications with React, understanding how the
                  library&apos;s internal algorithms and the entire component
                  rendering flow work.
                </p>
              </li>
              <li>
                <p>Unit tests in React:</p>
                <p>
                  In this module we will understand how to create automated unit
                  tests within React ensuring that our components and pages
                  continue to work regardless of new maintenance. All this using
                  Jest and Testing Library.
                </p>
              </li>
              <li>
                <p>Deployment Strategies in ReactJS:</p>
                <p>
                  In this module we will learn about the main deployment
                  strategies of a ReactJS application with and without Next.js
                  using services like Netlify and Vercel mainly, but also
                  presenting other options for more complex projects.
                </p>
              </li>
            </ul>
            <p style={{ textAlign: "end" }}>
              <a
                href="https://github.com/lui7henrique?tab=repositories&q=reactjs&type=&language=&sort="
                target="blank"
              >
                And others...
              </a>
            </p>
          </div>
        )
      },
      {
        name: "React Native",
        icon: SiReact,
        score: 7,
        content: (
          <div>
            <p>
              Development of modern and responsive mobile apps for both iOS and
              Android natively.
            </p>
            <ul>
              <li>
                <p>React Native Fundamentals:</p>
                <p>
                  We will learn the mobile development ecosystem with React
                  Native, create and understand the structure of React Native
                  projects with the CLI, as well as know the main concepts
                  around the library such as components, properties, state,
                  immutability, hooks, styling and use of TypeScript.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactnative-gofinance"
                  target="blank"
                >
                  Expo e Styled Components:
                </a>
                <p>
                  In this module you will learn about Expo, a Framework that
                  offers us a set of tools and services created around React
                  Native platforms that will boost our development. And you will
                  also learn how to use Styled Components to create interfaces
                  with the concept of CSS-in-JS, that is, which allows us to
                  write CSS codes inside Javascript. And why should I use Styled
                  Components? The answer is simple: practicality.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactnative-gofinance"
                  target="blank"
                >
                  Forms and Navigation:
                </a>
                <p>
                  In this module you will learn how to use React Hooks Forms
                  with the purpose of creating flexible forms, with simple ways
                  to validate and without unnecessary rendering. You will also
                  learn to create navigation between mobile screens.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactnative-gofinance"
                  target="blank"
                >
                  Async Storage:
                </a>
                <p>
                  In this module you will learn how to use Async Storage to
                  store data on the user&apos;s device. Async Storage is a great
                  storage strategy when there are not many rules and
                  relationships involved, as the storage system is simple and
                  key-value-based, asynchronous and persistent. And as a break,
                  let&apos;s create the graph of our application.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactnative-gofinance"
                  target="blank"
                >
                  Contexts and Authentication:
                </a>
                <p>
                  In this module you will learn how to use Social Login with
                  OAuth Authentication, which is an incredible strategy that
                  allows you to use user data from an existing account, such as
                  a Google account. Authentication with Social Login brings
                  comfort to the user who does not need to create a new account
                  from scratch and can go straight to what really matters, which
                  is to use our App. What&apos;s more, in this module you will
                  also learn how to use the Context API to share data with your
                  entire application (or part of it). And to top it off,
                  you&apos;ll learn how to create your own Hook. We will use
                  this perfect combination to store and access user data in one
                  place.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactnative-rentx"
                  target="blank"
                >
                  Consuming API:
                </a>
                <p>
                  In this module you will learn how to integrate your React
                  Native application with an API. You will understand the
                  methods of the HTTP protocol, handle requests and responses
                  made to an API. To integrate and consume API we will use
                  Axios.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/lui7henrique/ignite-reactnative-rentx"
                  target="blank"
                >
                  Animations:
                </a>
                <p>
                  Time to take our knowledge of interface development to the
                  next level by knowing and applying in practice tools and
                  techniques that will be present in your applications in the
                  future applying good UX and Animation practices.
                </p>
              </li>
              <li>
                <p>Offline First:</p>
                <p>
                  It&apos;s time to implement the Offline First strategy so that
                  some features of our application work without an internet
                  connection using a more robust local database.
                </p>
              </li>
              <li>
                <p>Tests on React Native:</p>
                <p>
                  Automated testing is an excellent strategy to ensure that
                  components and functionality continue to work regardless of
                  new maintenance.
                </p>
              </li>
              <li>
                <p>Performing Apps</p>
                <p>
                  In mobile applications, you may be concerned about performance
                  and, therefore, in this module we will understand how to
                  perform applications in React Native, understanding how the
                  library&apos;s internal algorithms and the entire component
                  rendering flow work.
                </p>
              </li>
              <li>
                <p>App Publishing:</p>
                <p>
                  In this module we will learn how to send the Android
                  application to the Google Play Store and the iOS app to the
                  Apple Store to make our application available to the world.
                </p>
              </li>
              <li>
                <p>CI/CD Flow:</p>
                <p>
                  In this module we will seek to automate the process of
                  creating the next builds for our applications as soon as a new
                  version is sent to the repository. And for that, we are going
                  to implement the CI/CD strategy, that is, Continuous
                  Integration and Continuous Delivery.
                </p>
              </li>
            </ul>
            <p style={{ textAlign: "end" }}>
              <a
                href="https://github.com/lui7henrique?tab=repositories&q=reactnative&type=&language=&sort="
                target="blank"
              >
                And others...
              </a>
            </p>
          </div>
        )
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        score: 4
      },
      {
        name: "NodeJS",
        icon: SiNodedotjs,
        score: 4
      }
    ],
    []
  )

  const [activeSkill, setActiveSkill] = useState<typeof skills[0]>()

  return (
    <S.Container id="skills">
      <S.Content>
        <S.Skills>
          {skills.map((skill, index) => {
            return (
              <>
                <S.Skill
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={
                    skill === activeSkill
                      ? () => setActiveSkill(undefined)
                      : () => setActiveSkill(skill)
                  }
                >
                  <S.SkillAllInfos>
                    <skill.icon size={25} color={theme.colors.title} />
                    <S.SkillBasicInfos>
                      <S.SkillName>{skill.name}</S.SkillName>
                      <ProgressBar total={10} value={skill.score} />
                    </S.SkillBasicInfos>
                  </S.SkillAllInfos>
                  {skill.content && (
                    <S.SkillButtonIcon isOpen={skill === activeSkill} />
                  )}
                </S.Skill>
                {skill.content && (
                  <S.SkillsStuff isOpen={skill === activeSkill}>
                    {skill.content}
                  </S.SkillsStuff>
                )}
              </>
            )
          })}
        </S.Skills>

        <S.Aside>
          <S.ContentTitles>
            <div>
              <S.ContentSubTitle data-aos="fade-left" data-aos-delay="200">
                My current
              </S.ContentSubTitle>
              <S.ContentTitle data-aos="fade-left" data-aos-delay="100">
                Skills
              </S.ContentTitle>
            </div>
          </S.ContentTitles>
        </S.Aside>
      </S.Content>
    </S.Container>
  )
}
