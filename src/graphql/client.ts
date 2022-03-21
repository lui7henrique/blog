import { GraphQLClient } from "graphql-request"

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_HOST || ""

const localeClient = (locale: "pt_BR" | "en_US") => {
  return new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`,
      "gcms-locales": locale
    }
  })
}

export default localeClient
