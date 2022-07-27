import { makeBlogPosts } from "./md2blog"
import { getNotionPages } from "./notion2md"
import dotenv from "dotenv"

const main = async () => {
  dotenv.config()
  // Notion에서 NotionPage Object 불러오기
  const notionPages = await getNotionPages()
  // NotionPage Object로 Category별로 폴더 생성 및 .md 파일 생성
  makeBlogPosts(notionPages)
}

main()
