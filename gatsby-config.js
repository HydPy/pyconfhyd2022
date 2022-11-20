module.exports  = {
  pathPrefix: `/2022`,
  siteMetadata: {
    title: `PyConf Hyderabad 2022`,
    description: `PyConf Hyderabad is one of the biggest regional conference in Hyderabad, after back to back 
    succesful events, Hyderabad Python group is back with 2022 Edition! PyConf Hyderabad 
    `,
    twitterUsername: `@hydpython`, 
    image: `/images/icon.png`,
    siteUrl: `https://pyconf.hydpy.org/2022`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-transformer-yaml`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        id: `/`,
        name: `PyConf Hyderabad 2022`,
        short_name: `PyConf 2022`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/data/`,
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "misc",
        path: "./src/misc/",
      },
      __key: "misc",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-3KN0M0HRMD",
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};