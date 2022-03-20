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

export const GET_POSTS = gql`
  query getPosts() {
    posts(locales: [pt_BR]) {
      id
      heading
      abstract
      createdAt
      updatedAt
      thumbnail {
        id
        width
        height
        url
      }
    }
  }
`
