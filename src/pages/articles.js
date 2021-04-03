import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import ArticleCard from "../components/ArticleCard"

const ArticlesPage = ({ data }) => {
  const {
    allSanityPost: { nodes: posts },
  } = data

  return (
    <Layout>
      <Helmet>
        <title>Andy Miller III - Articles</title>
      </Helmet>
      <h1 className="text-4xl">Articles</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div className="flex space-x-5">
        {posts.map((post) => (
          <ArticleCard post={post}></ArticleCard>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityPost(limit: 10) {
      nodes {
        title
        slug {
          current
        }
        mainImage {
          ...ImageWithPreview
        }
        id
        previewText
        publishedAt(formatString: "MMMM D YYYY")
      }
    }
  }
`

export default ArticlesPage