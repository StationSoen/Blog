import { makeBlogPosts } from "./md2blog"
import { getNotionPages } from "./notion2md"

const main = async () => {
  // Notion에서 NotionPage Object 불러오기
  const notionPages = await getNotionPages()
  console.log(notionPages)
  makeBlogPosts(notionPages)

  // NotionPage Object로 Category별로 폴더 생성 및 .md 파일 생성
}

main()
