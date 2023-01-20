import { Categories } from "graphql/generated/graphql"
import { useCallback } from "react"

export const usePostsCategories = () => {
  const getIconByCategory = useCallback((category: Categories) => {
    const icon: Record<Categories, string> = {
      Books: "books",
      Career: "career",
      Coding: "coding"
    }

    return icon[category] || "general"
  }, [])

  return { getIconByCategory }
}
