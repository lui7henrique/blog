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
      technologies
    }
  }
`

export const GET_POSTS = gql`
  query getPosts($stage: Stage! = DRAFT) {
    posts(stage: $stage) {
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
      technologies
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!, $stage: Stage! = DRAFT) {
    posts(where: { slug: $slug }, stage: $stage) {
      id
      heading
      slug
      abstract
      updatedAt
      updatedBy {
        id
        name
        picture
      }
      technologies
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

export const GET_POST_SLUG_BY_ID = gql`
  query getPostSlugById($id: ID!, $stage: Stage! = DRAFT) {
    posts(where: { id: $id }, stage: $stage) {
      slug
    }
  }
`
