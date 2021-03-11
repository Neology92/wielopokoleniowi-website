module.exports = {
  siteMetadata: {
    title: `Wielopokoleniowi`,
    description: `Jeśli dbasz o siebie, swoją rodzinę, majątek lub firmę - znalazłeś się w dobrym miejscu. Wielopokoleniowi to blog o sukcesji, mądrym budowaniu majątku i biznesu oraz o przekazywaniu ich kolejnym pokoleniom.`,
    author: `@Neology`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-stylelint`,
      options: { files: ['**/*.js'] },
    },
    `gatsby-plugin-resolve-src`, // Allows to use absolute path
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'graphcms',
        url:
          'https://api-eu-central-1.graphcms.com/v2/cjycti0901d9701e2wyewpsfw/master', // API
        // 'https://api-euwest.graphcms.com/v1/cjycti0901d9701e2wyewpsfw/master', // Legacy API
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-2E1YR5E15L'],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '921774938567180',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wielopokoleniowi`,
        short_name: `wielopokoleniowi`,
        start_url: `/`,
        background_color: `#24306E`,
        theme_color: `#24306E`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
