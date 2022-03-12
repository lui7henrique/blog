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
        score: 9
      },
      {
        name: "CSS3",
        icon: SiCss3,
        score: 9
      },
      {
        name: "Javascript",
        icon: SiJavascript,
        score: 9
      },
      {
        name: "ReactJS",
        icon: SiReact,
        score: 9,
        content: (
          <div>
            <p>
              Develop modern and responsive web interfaces using a modular and
              scalable library.
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
                  First web application with ReactJS
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
                  Next.js Fundamentals
                </a>
                <p>
                  In this module we will understand how Next.js transforms the
                  way we develop front-end applications and we will discover
                  important concepts such as SSR and SSG.
                </p>
              </li>
              <li>
                <a href="https://github.com/lui7henrique/ignews" target="blank">
                  Back-end on front-end
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
                  Front-end JAMStack
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
                  Building interfaces of the future
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
                  Data fetching and local cache
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
                  Authentication and authorization
                </a>
                <p>
                  In this module we will understand how to create a complete
                  authentication, authorization and refresh token process within
                  React with Next.js allowing to control access to routes and
                  components both on the client-side and server-side.
                </p>
              </li>
              <li>
                <p>Performing apps with ReactJS</p>
                <p>
                  A common concern in the development of web applications is
                  performance and, therefore, in this module we will understand
                  how to perform applications with React, understanding how the
                  library&apos;s internal algorithms and the entire component
                  rendering flow work.
                </p>
              </li>
              <li>
                <p>Unit tests in React</p>
                <p>
                  In this module we will understand how to create automated unit
                  tests within React ensuring that our components and pages
                  continue to work regardless of new maintenance. All this using
                  Jest and Testing Library.
                </p>
              </li>
              <li>
                <p>Deployment Strategies in ReactJS</p>
                <p>
                  In this module we will learn about the main deployment
                  strategies of a ReactJS application with and without Next.js
                  using services like Netlify and Vercel mainly, but also
                  presenting other options for more complex projects.
                </p>
              </li>
            </ul>
          </div>
        )
      },
      {
        name: "ReactNative",
        icon: SiReact,
        score: 8
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        score: 7
      },
      {
        name: "NodeJS",
        icon: SiNodedotjs,
        score: 7
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
