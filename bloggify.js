"use strict";

module.exports = {
    title: "Bloggify",
    description: "We make publishing easy.",
    domain: "https://bloggify.org",
    plugins: ["bloggify-emoji", ["contact-form", {
        "sendgrid_key": process.env.SG_API_KEY,
        "contact": {
            "email": "support@bloggify.org",
            "name": "Bloggify"
        }
    }], ["redirect", {
        "/blog": "/products",
        "/blog/*": "/products"
    }], "markdown-highlight"],
    "adapter": ["bloggify-markdown-adapter", {
        "articles_per_page": 100,
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
                "previewLink": "https://preview.bloggify.org",
                "defaultOgImage": "/assets/mascot/beky.png",
                "show_article_metadata": false,
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
    }],
    "server": {
        "session": false,
        "transformers": true
    }
};