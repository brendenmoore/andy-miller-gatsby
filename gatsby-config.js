module.exports = {
  siteMetadata: {
    title: "Andy Miller III",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "f2boyawd",
        dataset: "production",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
  ],
}
