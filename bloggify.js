"use strict";

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    metadata: {
        siteTitle: "Bloggify"
      , description: "We make publishing easy."
      , domain: isProduction ? "https://bloggify.org" : "http://localhost:8080"
    }
  , theme: {
        previewLink: "https://preview.bloggify.org"
    }
  , themeDir: "/theme"
  , pluginConfigs: {
        "bloggify-ajs-renderer": {
            disableCache: false
        }
      , "bloggify-mongoose": {
            db: "mongodb://localhost/bloggify-live"
          , models: {
                Stat: {
                    ip: String
                  , user_agent: String
                  , device: Object
                  , url: String
                  , path: String
                  , headers: Object
                  , session: Object
                  , date: {
                        type: Date,
                        default: () => new Date()
                    }
                }
            }
        }
      , "bloggify-plugin-manager": {
            plugins: [
                "bloggify-router",
                "bloggify-ajs-renderer",
                "bloggify-viewer"
            ].concat(
                isProduction
              ? []
              : ["bloggify-analytics", "bloggify-mongoose"]
            )
        }
    }
};
