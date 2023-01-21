import { Categories } from "graphql/generated/graphql"
import { useCallback } from "react"

export type PostURLCategory = "coding" | "books" | "career"

export const usePostsCategories = () => {
  const getIconByCategory = useCallback((category: Categories) => {
    const icon: Record<Categories, string> = {
      Books: "books",
      Career: "career",
      Coding: "coding"
    }

    return icon[category] || "general"
  }, [])

  const getTitleByCategory = useCallback((category: PostURLCategory) => {
    const title: Record<PostURLCategory, string> = {
      books: "Books",
      career: "Career",
      coding: "Coding"
    }

    return title[category] || "All posts"
  }, [])

  return { getIconByCategory, getTitleByCategory }
}
