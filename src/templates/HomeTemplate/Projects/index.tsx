import { GetProjectsQuery } from "graphql/generated/graphql"

type ProjectsProps = {
  projects: GetProjectsQuery["projects"]
}

export const Projects = (props: ProjectsProps) => {
  const { projects } = props

  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h1>{project.heading}</h1>
            <p>{project.abstract}</p>
          </div>
        )
      })}
    </>
  )
}
