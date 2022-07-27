import { Client } from "@notionhq/client"

export const postDatabaseId = process.env.POST_DATABASE_ID

export const notionClient = new Client({
  auth: process.env.NOTION_CLIENT_KEY,
})
