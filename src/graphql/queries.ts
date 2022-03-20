import { gql } from "graphql-request"

export const GET_PROJECTS = gql`
  query getProjects($first: Int) {
    projects(first: $first) {
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
  query getPosts($first: Int) {
    posts(first: $first) {
      id
      heading
      slug
      abstract
      thumbnail {
        id
        width
        height
        url
      }
      updatedAt
      updatedBy {
        id
        name
        picture
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      heading
      updatedAt
      updatedBy {
        id
        name
        picture
      }
      banner {
        width
        height
        url
        id
      }
      thumbnail {
        width
        height
        url
        id
      }
      content {
        html
      }
    }
  }
`
