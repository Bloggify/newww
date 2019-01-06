"use strict";

module.exports = {
    title: "Bloggify"
  , description: "We make publishing easy."
  , domain: "https://bloggify.org"
  , plugins: [
      "bloggify-emoji"
    , "social"
    , ["redirect", {
        "/blog/26-uploading-videos-to-youtube-using-nodejs": "/blog/14-uploading-videos-to-youtube-using-nodejs"
      , "/blog/35-the-joy-of-being-a-mentor": "/blog/34-the-joy-of-being-a-mentor"
      }]
    , "markdown-highlight"
    ]
  , "adapter": ["bloggify-markdown-adapter", {
        "parse": {
            "converterOptions": {
                "strikethrough": true,
                "emoji": true
            }
        },
        "routes": {
          "articles": "/products",
          "blog_url": "/products"
        },
        "theme": ["/app/theme", {
            "options": {
                "social": {
                    "twitter": "Bloggify",
                    "github": "Bloggify"
                },
                "ga": {
                    "id": process.env.GA_KEY,
                    "url": "bloggify.org"
                }
            }
        }]
    }]
}
