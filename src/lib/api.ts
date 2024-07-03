import type { News } from '@/types.ts'

/**
 * Fetches the GraphQL API
 * @param operationsDoc
 * @param operationName
 * @param variables
 */
async function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  variables: Record<string, any>
) {
  const result = await fetch(`${import.meta.env.BACKEND_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName
    })
  })
  return await result.json()
}

/**
 * Fetches the list of news
 */
export async function fetchNewsList() {
  const { errors, data } = await fetchGraphQL(
    `
  query GetNewsList {
    news {
        title
        slug
        publishedAt
        excerpt
        coverImageUrl
        content
    }
}
`,
    'GetNewsList',
    {}
  )

  if (errors) {
    // handle those errors like a pro
    console.error(errors)
  }

  console.log(data)
  return data.news as News[]
}
