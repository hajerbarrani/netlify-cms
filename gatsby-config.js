module.exports = {
    siteMetadata: {
      title: 'Hajer test Gatsby + Netlify CMS Starter',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/assets`,
          name: 'assets',
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [],
        },
      },
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          modulePath: `${__dirname}/src/cms/cms.js`,
        },
      },
      'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
  }
  