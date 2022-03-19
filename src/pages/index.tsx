import client from "graphql/client"
import { GetProjectsQuery } from "graphql/generated/graphql"
import { GET_PROJECTS } from "graphql/queries"
import { GetStaticProps } from "next"
import { HomeTemplate } from "templates/HomeTemplate"

type HomeProps = {
  projects: GetProjectsQuery["projects"]
}

export default function Home(props: HomeProps) {
  const { projects } = props

  return <HomeTemplate projects={projects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)

  return {
    props: {
      projects
    }
  }
}
