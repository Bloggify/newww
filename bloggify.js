"use strict";

module.exports = {
    title: "Bloggify"
  , description: "We make publishing easy."
  , domain: "https://bloggify.org"
  , plugins: [
      "bloggify-emoji"
    , ["redirect", {
        "/blog": "/products"
      , "/blog/*": "/products"
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
          "blog_url": "/products",
          "blog": "products",
          "home": "_home"
        },
        "theme": ["/app/theme", {
            "options": {
                "previewLink": "https://preview.bloggify.org"
              , "defaultOgImage": "/assets/mascot/beky.png"
              , "show_article_metadata": false
              , "social": {
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
