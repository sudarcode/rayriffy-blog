const { GATSBY_ENV = 'production', CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_PREVIEW = false } = process.env

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-rayriffy-blog`,
      options: {
        contentful: {
          space: uc9ip6s4tbfs,
          token: WzCKKsVn5_cg4jgjC7gHpA0P-nneymLUVojmRahgYDQ,
          preview: 9g0vY_dq9TGOLMCNvMayd5htSpBMoloSj1Ct2bKvF_o === 'true',
        },
        seo: {
          meta: {
            siteName: 'Riffy Blog',
            author: 'Phumrapee Limpianchop',
            description: 'The Nerdy Blogger',
            url: `${
              GATSBY_ENV === 'production'
                ? `https://blog.rayriffy.com`
                : GATSBY_ENV === 'staging'
                ? `https://staging.blog.rayriffy.com`
                : GATSBY_ENV === 'preview'
                ? `https://preview.blog.rayriffy.com`
                : `https://localhost:8000`
            }`,
          },
          apps: {
            facebook: '342680353046527',
          },
          robots: {
            policy: [
              {
                userAgent: '*',
                disallow: GATSBY_ENV === 'production' ? ['/pages', '/category', '/author'] : ['/'],
              },
            ],
          },
          sitemap: {
            output: `/sitemap.xml`,
            exclude: [
              '/**/pages/*',
              '/category/**/*',
              '/author/**/*',
            ],
          },
          analytics: {
            tracker: GATSBY_ENV === 'production' ? 'UA-85367836-2' : GATSBY_ENV === 'staging' ? 'UA-85367836-3' : ''
          }
        },
      },
    },
  ],
}
