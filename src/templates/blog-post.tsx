import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Margin } from "../components/Margin"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout title={siteTitle} subTitle={post.frontmatter.title}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="flex flex-col justify-between flex-1 w-full bg-red-400">
        <div className="flex flex-col flex-1 bg-blue-400">
          <article
            className="flex flex-col w-full blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <Margin margin={24} />
            <header className="flex flex-col w-full ">
              <h1
                className="text-3xl font-medium font-oneMobile text-key-blue"
                itemProp="headline"
              >
                {post.frontmatter.title}
              </h1>
              <Margin margin={12} />
              <div className="flex items-end w-full">
                <p className="text-2xl whitespace-pre">{`${post.frontmatter.date}  |  ${post.frontmatter.category}`}</p>
              </div>
            </header>
            <Margin margin={20} />
            <hr />
            <Margin margin={20} />
            <div>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </div>
          </article>
        </div>
        <Margin margin={20} />
        <hr />
        <Margin margin={20} />
        <div className="flex flex-col justify-between w-full bg-red-400">
          <h2 className="text-2xl font-oneMobile text-key-blue">
            다른 포스트들
          </h2>
          <Margin margin={16} />
          {previous && (
            <>
              <div className="flex p-4 hover:text-key-blue ">
                <Link to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title}
                </Link>
              </div>
              <Margin margin={8} />
            </>
          )}
          {next && (
            <div className="flex p-4 hover:text-key-blue">
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </div>
          )}
        </div>
        <Margin margin={20} />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
