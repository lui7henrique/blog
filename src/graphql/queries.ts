import { gql } from "graphql-request"

export const GET_PROJECTS = gql`
  query getProjects() {
    projects() {
      id
      heading
      abstract
      thumbnail {
        id
        width
        height
        url
      }
      images {
        id
        width
        height
        url
      }
      projectUrl
      repositoryUrl
    }
  }
`
