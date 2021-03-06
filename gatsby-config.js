require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const DATADIR = `${__dirname}/src/data`

module.exports = {
  siteMetadata: {
    title: "Nicky.pro",
    description: "Nicky Pochinkov's Personal Website/Blog - built with GatsbyJS",
    author: "Nicky Pochinkov",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${DATADIR}`,
      },
    },
    /*{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${DATADIR}/projects`
      }
    },*/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          {
            resolve: 'gatsby-remark-copy-relative-linked-files',
            options: {
              ignoreFileExtensions: ['.md', '.png', '.jpg', '.pdf', '.xcf'],
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `${DATADIR}/icon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}