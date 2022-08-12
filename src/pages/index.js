import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio2 from "../components/bio"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  // early return
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <p className="text-4xl font-bold font-score text-black-d">
        블로그 준비중입니다.
      </p>
      <a
        href="https://blog.sunghyun.co/about"
        className="text-2xl font-bold font-score text-black-d text-key-lidi"
      >
        이력서 링크
      </a>
      <a
        href="https://blog.sunghyun.co/portfolio"
        className="text-2xl font-bold font-score text-black-d text-key-lidi"
      >
        포트폴리오 링크
      </a>
    </div>
  )

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug} className="py-6">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className="text-2xl">
                    <Link to={post.fields.slug} itemProp="url">
                      <span
                        className="font-medium font-oneMobile text-key-blue"
                        itemProp="headline"
                      >
                        {title}
                      </span>
                    </Link>
                  </h2>
                  <small className="text-lg text-b-l">
                    {post.frontmatter.date}
                  </small>
                </header>
                <section>
                  <p
                    className="text-base text-b-m"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
