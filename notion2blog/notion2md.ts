import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { NotionToMarkdown } from "notion-to-md"
import { notionClient, postDatabaseId } from "./constants"

export interface NotionPage {
  notionPageId: string
  title: string
  createdAt: string // ISO
  updatedAt: string // ISO
  category: string
  content: string // markdown string
}

export const getNotionPages = async (): Promise<NotionPage[]> => {
  const databaseResponse = await notionClient.databases.query({
    database_id: postDatabaseId as string,
  })
  const postPageIds = databaseResponse.results.map(
    (e: PageObjectResponse | PartialPageObjectResponse) => e.id
  )

  const notionPages: NotionPage[] = []
  for (const pageId of postPageIds) {
    const result = await getNotionPageFromPageId(pageId)
    notionPages.push(result)
  }

  return notionPages
}

const getNotionPageFromPageId = async (pageId: string): Promise<NotionPage> => {
  const page = await notionClient.pages.retrieve({
    page_id: pageId,
  })

  // get Properties
  const pageTitleProperties = await notionClient.pages.properties.retrieve({
    page_id: pageId,
    property_id: "title",
  })
  const title = (pageTitleProperties as any)["results"][0]["title"][
    "plain_text"
  ]

  const pageCategoryProperties = await notionClient.pages.properties.retrieve({
    page_id: pageId,
    property_id: "Z%3Btu",
  })
  const category = (pageCategoryProperties as any)["select"]["name"]

  // get page info
  const createdAt = (page as any)["created_time"]
  const updatedAt = (page as any)["last_edited_time"]

  // convert to notion content to markdown
  const notionMarkdown = new NotionToMarkdown({ notionClient })
  const mdblocks = await notionMarkdown.pageToMarkdown(pageId)
  const content = notionMarkdown.toMarkdownString(mdblocks)

  return {
    notionPageId: pageId,
    title,
    createdAt,
    updatedAt,
    category,
    content,
  }
}
