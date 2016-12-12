"use strict";

const conf = require("bloggify-config")

module.exports = conf({
    title: "Bloggify"
  , description: "We make publishing easy."
  , domain: "https://bloggify.org"
  , prodPlugins: [
        "bloggify-analytics",
        "bloggify-mongoose"
    ]
  , config: {
        bloggifyMongoose: {
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
    }
}, {
    metadata: {
        twitter: "Bloggify"
    }
  , theme: {
        previewLink: "https://preview.bloggify.org"
      , defaultOgImage: "/assets/mascot/beky.png"
    }
});
