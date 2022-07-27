import path from "path"
import fs from "fs"

import { NotionPage } from "./notion2md"

export const makeBlogPosts = (notionPages: NotionPage[]) => {
  const [_, currentPath] = process.argv
  const root = path.dirname(currentPath)
  const blogDir = path.join(root + "/../content/blog")
  // console.log(blogDir)
  for (const notionPage of notionPages) {
    const { title, category } = notionPage
    const post = createMdFile(notionPage)
    const categoryDir = blogDir + "/" + category
    if (!fs.existsSync(categoryDir)) {
      // console.log("NO Category Folder")
      fs.mkdirSync(categoryDir)
    }
    fs.writeFileSync(categoryDir + `/${title}.md`, post, {
      encoding: "utf-8",
    })
  }
  console.log("Write markdown file from Notion Pages : Comeplete")
}

const createMdFile = (notionPage: NotionPage): string => {
  const { title, createdAt, updatedAt, category, content } = notionPage
  const frontmatter = `---
title: ${title}
date: ${updatedAt}
createdAt: ${createdAt}
category: ${category}
---
`
  const post = frontmatter + content
  return post
}
