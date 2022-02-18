/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Tony Tewes',
    author: 'Timothy Dinan'
  },

  plugins: [
      'gatsby-plugin-react-helmet',

      'gatsby-plugin-postcss',
      'gatsby-transformer-sharp',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'images',
              path: `${__dirname}/src/media`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}
